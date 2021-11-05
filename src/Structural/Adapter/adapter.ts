interface ICubeA {
    manufacture(height: number, width: number, depth: number): boolean,
}

interface ICubeB {
    create(topLeftCorner: [number, number, number], bottomRightCorner: [number, number, number]): boolean,
}

export class CubeA implements ICubeA {
    static lastTime = Date.now();

    manufacture(height: number, width: number, depth: number): boolean {
        const now = Date.now();
        if (now > CubeA.lastTime + 1500) {
            console.log(`   Company A create a cube with ${height}x${width}x${depth}`);
            CubeA.lastTime = now;

            return true;
        }

        return false;
    }
}

class CubeB implements ICubeB {
    static lastTime = Date.now();

    create(topLeftCorner: [number, number, number], bottomRightCorner: [number, number, number]): boolean {
        const now = Date.now();
        if (now > CubeB.lastTime + 3000) {
            console.log(`   Company B create a cube with [${topLeftCorner[0]},${topLeftCorner[1]},${topLeftCorner[2]}],[${bottomRightCorner[0]},${bottomRightCorner[1]},${bottomRightCorner[2]}]`);
            CubeB.lastTime = now;

            return true;
        }

        return false;
    }
}

export class CubeBAdapter implements ICubeA {
    #cubeB: CubeB;

    constructor() {
        this.#cubeB = new CubeB();
    }

    manufacture(width: number, height: number, depth: number): boolean {
        const success = this.#cubeB.create(
            [0 - width / 2, 0 - height / 2, 0 - depth / 2],
            [0 + width / 2, 0 + height / 2, 0 + depth / 2]
        );

        return success;
    }
}