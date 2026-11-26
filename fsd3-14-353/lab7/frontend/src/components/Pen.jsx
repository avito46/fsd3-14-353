export default function Pen({Pen})
{
    return (
        <>
        <img src={Pen.picUrl} alt="pen" />
        <h3>{Pen.company}</h3>
        <h4>{Pen.price}</h4>
        </>
    )
}