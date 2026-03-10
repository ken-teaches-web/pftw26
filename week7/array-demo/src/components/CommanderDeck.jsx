export function CommanderDeck(props) {
    console.log("props", props);
    const {commander, hasWon, colors, image} = props;
    const compiledColors = colors.join(" ");
    return <div 
        className={compiledColors + " commander-deck"}
      >
        {commander}
        <img className="commander-image" src={image} />
        </div>
}