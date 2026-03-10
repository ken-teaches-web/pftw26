export function Heading(props){
    console.log(props)
    // const title = props.title;
    // deconstructing objects
    const {color, children} = props;
    return (
        <h1 className={color}>{children}</h1>
    )
}