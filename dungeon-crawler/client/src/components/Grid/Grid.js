import { useEffect, useState } from 'react';
import './Grid.css'
import { Tile } from '../Tile/Tile';
import { GridUtilities } from './gridUtilities';

const Grid = (props) => {
    const gridTemplate = {
        gridTemplateColumns: `repeat(${props.dimensions}, 3em)`
    };
    const [grid, setGrid] = useState([]);
    useEffect(() => {
        setGrid(GridUtilities.createGrid(props.dimensions));
    }, [])




    return (
        <div className="Grid" style={gridTemplate}>
            {grid.map((tiles) => tiles.map((tile) =>
                <Tile
                    key={tile.id}
                    tile={tile}
                    handleTileClick={props.handleTileClick}
                    isSelected={props.selectedTile?.id === tile.id}
                />

            ))}
        </div>
    );
}

export default Grid