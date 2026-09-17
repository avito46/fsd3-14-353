import http from "http";
import {
  getAllTeams,
  addTeam,
  getTeamById,
  deleteTeam,
  updateTeamById,
} from "./teams.js";
import { parse as parseUrl } from "url";

const PORT = 5000;

const sendJson = (res, statusCode, data, keyword, msg) => {
  res.writeHead(statusCode, {
    "content-type": "application/json",
  });

  if (keyword && msg) {
    res.end(
      JSON.stringify({
        [keyword]: msg,
        data,
      })
    );
  } else {
    res.end(JSON.stringify(data));
  }
};

const parseJSONBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });

    req.on("error", reject);
  });
};

const server = http.createServer(async (req, res) => {
  const { pathname, query } = parseUrl(req.url, true);
  const { method } = req;

  console.log("pathname:", pathname);
  console.log("query:", query);
  console.log("Method:", method);

  // GET ALL TEAMS
  if (pathname === "/api/v1/teams" && method === "GET") {
    const teams = getAllTeams();

    return sendJson(res, 200, teams, "count", teams.length);
  }

  // POST - ADD TEAM
  else if (pathname === "/api/v1/teams" && method === "POST") {
    let body;

    try {
      body = await parseJSONBody(req);
    } catch (error) {
      return sendJson(res, 400, {
        error: "Invalid JSON body",
      });
    }

    const { tname, tl, members } = body;

    if (!tname || !tl || !members) {
      return sendJson(res, 400, {
        error: "Team Name, Team Leader, or Members not defined",
      });
    }

    const team = addTeam({
      tname,
      tl,
      members,
    });

    return sendJson(
      res,
      201,
      team,
      "Message",
      "Team registered successfully"
    );
  }

  // GET TEAM BY ID
  else if (
    pathname.startsWith("/api/v1/teams/") &&
    method === "GET"
  ) {
    const id = Number(pathname.split("/").pop());

    const team = getTeamById(id);

    if (!team) {
      return sendJson(res, 400, {
        error: `Team with id: ${id} not found`,
      });
    }

    return sendJson(res, 200, team, "Message", "Team Found");
  }

  // DELETE TEAM
  else if (
    pathname.startsWith("/api/v1/teams/") &&
    method === "DELETE"
  ) {
    const id = Number(pathname.split("/").pop());

    const team = getTeamById(id);

    if (!team) {
      return sendJson(res, 400, {
        error: `Team with id: ${id} not found`,
      });
    }

    deleteTeam(id);

    return sendJson(res, 200, team, "Message", "Team Found");
  }

  // PUT - UPDATE TEAM
  else if (
    pathname.startsWith("/api/v1/teams/") &&
    method === "PUT"
  ) {
    const id = Number(pathname.split("/").pop());

    const oldTeam = getTeamById(id);

    if (!oldTeam) {
      return sendJson(res, 400, {
        error: `Team with id: ${id} not found`,
      });
    }

    let body;

    try {
      body = await parseJSONBody(req);
    } catch (error) {
      return sendJson(res, 400, {
        error: "Invalid JSON body",
      });
    }

    const { tname, tl, members } = body;

    if (!tname || !tl || !members) {
      return sendJson(res, 400, {
        error: "Team Name, Team Leader, or Members not defined",
      });
    }

    const updateTeam = updateTeamById(id, {
      tname,
      tl,
      members,
    });

    return sendJson(
      res,
      200,
      updateTeam,
      "Message",
      "Team updated successfully"
    );
  }

  // INVALID ROUTE
  else {
    return sendJson(res, 404, {
      error: "Not matching",
    });
  }
});

server.listen(PORT, () => {
  console.log("SIH Server is running at", PORT);
});