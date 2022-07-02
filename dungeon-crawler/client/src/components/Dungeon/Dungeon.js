import { useState } from "react";
import Grid from "../Grid/Grid";
import TileEditor from "../TileEditor/TileEditor";

const Dungeon = () => {
    const [selectedTile, setSelectedTile] = useState(null);

    const handleTileClick = (tile) => {
        setSelectedTile(tile);
    }

    return (
        <div className='Dungeon'>
            <Grid dimensions="10"
                selectedTile={selectedTile}
                handleTileClick={handleTileClick}
            />
            <TileEditor 
                selectedTile={selectedTile}
                setSelectedTile={setSelectedTile}
            />

        </div>
    );
}

export default Dungeon;