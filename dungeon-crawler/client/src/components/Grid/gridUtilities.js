import { TileObj } from "../Tile/Tile";

export class GridUtilities {
    static createGrid(dimensions) {
        let grid = [];
        let tileId = 1;
        for (let i = 0; i < dimensions; i++) {
            grid.push([]);
            for (let j = 0; j < dimensions; j++) {
                grid[i].push(new TileObj(tileId++, 'red'));
            }
        }
        return grid;
    }
}