import './Tile.css';

export const Tile = (props) => {
    const handleTileClick = () => {
        props.handleTileClick(props.tile);
        console.log('Hi from tile number ' + props.tile.id);
    }

    return (
        <div
            className={`Tile 
                        ${props.isSelected ? 'selected' : ''}
                        ${props.tile.type}
            `}
            onClick={handleTileClick}>
            {props.tile.id}
        </div>
    );
}

export class TileObj {
    _type = 'wall';

    constructor(id, color) {
        this.color = color;
        this.id = id
    }

    set type(type) {
        this._type = type;
    }

    get type() {
        return this._type;
    }
}