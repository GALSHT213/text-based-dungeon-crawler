const TileEditor = (props) => {

    const handleTileTypeChange = (event) => {
        props.setSelectedTile({
            ...props.selectedTile
            ['type'] = event.target.value});
    }

    return (
        <div className='TileEditor'>
            <select value={props?.selectedTile?.type} onChange={handleTileTypeChange}>
                <option value='wall'>Wall</option>
                <option value='path'>Path</option>
            </select>
        </div>
    );
}

export default TileEditor;