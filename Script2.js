/*
 *
 * Objectives for genetic road designer
 *
 * Generate a collection of rectangles to serve as starting and ending points
 * Generate a collection of paths to serve as routes between the starting and ending points
 * Generate a collection of cellular automata that will use A* or some such pathfinding algorithm to reach an ending point via the routes
 * Calculate fitness based on number of collisions, percent of cells that reached their destination, average travel speed of eac cell (or maybe just tally the number of wait operations for each cell).
 *
 */

var TARGET="METHINKS IT IS LIKE A WEASEL";
var ALPHABET = "ABCDEFGHIJKLMONPQRSTUVWXYZ ";
var MUT_PROB = 10;

evolve();

function generateGenome()
{
    //console.log("generateGenome");
    let genome = [];

    for (let i =0; i<28;++i)
    {
        genome[i]=ALPHABET[Math.floor(Math.random()*ALPHABET.length)];
    }
    return genome.join("");
};

function getFitness(genome)
{
    //console.log("getFitness", genome);
    var fitness=0;

    for (var i=0; i<TARGET.length;++i)
    {
        if (genome[i]===TARGET[i])
        {
            fitness++;
        }
    }

    return fitness;
};

function getGenePool(genome)
{
    //console.log("getGenePool", genome);
    var pool = new Array(50);
    pool.fill(genome);
    return pool;
};

function getFittest (pool)
{
    //console.log("getFittest", pool);
    var fitnessValues = pool.map(x=> getFitness(x));
    return pool[fitnessValues.indexOf(Math.max(...fitnessValues))];
};

function doMutation(genome)
{
    //console.log("doMutation", genome);
    let returnMe = genome;

    for(let i = 0; i < returnMe.length; i++)
    {
        if((Math.random() * 100 <= MUT_PROB) && (returnMe[i] !== TARGET[i]))
        {
            returnMe = returnMe.substr(0, i) + ALPHABET[Math.floor(Math.random() * ALPHABET.length)] + returnMe.substr(i+1, returnMe.length-1);
        }
    }

    return returnMe;
}

function evolve()
{
    console.log("evolve");
    let pool = getGenePool(generateGenome()),
    maxFitness = 0,
    fittest = "", 
    iterations = 0, 
    mutatedArray = [];

    while((maxFitness < 28)&&(iterations < 1000))
    {
        pool.forEach(x => mutatedArray.push(doMutation(x)));
        pool = mutatedArray;

        mutatedArray = [];

        fittest = getFittest(pool);
        console.log("fittest", fittest);

        maxFitness = getFitness(fittest);
        iterations++;
        
        if(iterations % 10 === 0)
        {
            console.log("fittest", fittest);
            console.log("iterations", iterations);
        }
    }
}


function Model(){
    /*
     * Generate a collection of rectangles
     *
     * rules:
     * rectangles cannot intersect or lie adjacent to another rectangle
     *
     * @param {[][]} maxX - max value for rectangle x
     * @param {[][]} maxY - max value for rectangle y
     * @param {[][]} maxWidth - max value for rectangle width
     * @param {[][]} maxHeight - max value for rectangle height
     */
    function GenerateRectangle(maxX, maxY, maxWidth, maxHeight, density)
    {
        //get randomly generated x, y, width, height
    }

    /*
     * Generate a grid that contains paths and obstacles
     * @param {[][]} width - the number of x positions in the grid
     * @param {[][]} height - the number of the y positions in the grid
     * @param {[][]} density - average density of the obstacles on the grid
     *
     */
    function GenerateGrid(width, height, density)
    {
        //init; create a collection of the specified size
        var grid = [width];

        for(let i = 0; i < width; i++)
        {
            grid[i] = [height];
        }

        //in a loop, attempt to insert an obstacle rect into the grid until the density is reached
    }

    /*
     * Constructor for GridPoint
     *
     * each point should have a list of valid entry points (no teleporting) or vectors
     * and a list of valid exit points or vectors
     *
     *
     */
    function GridPoint(entryVectors, exitVectors)
    {
        //scope safety first
        if (!(this instanceof GridPoint)) {
            return new GridPoint(entryVectors, exitVectors);
        }

        this.entryVectors = entryVectors || []; //the vectors via which this point can be entered
        this.exitVectors = exitVectors || []; //the vectors that are available for travel out of this point
    };
}

var Constants = {
    //aliases are great
    Vectors :
    {
        up:[0,1],
        right:[1,0],
        down:[0,-1],
        left:[-1,0]
    }
};

//testing generators
function test(target) {
    var current = 0
      , iterations = 0,
      accumulator = addTenPercentGenerator(current, target),
          done = false;

    while((!done)&&(iterations < 10000))
    {
        let next = accumulator.next();

        if(!next.done)
        {
            current = next.value;
            iterations++;
        }
        else
        {
            done = true;
        }
    }

    console.log("iterations", iterations, "current", current, "target", target);
};

//in a loop, add 10% of the value needed to reach the target, minimum 1
function* addTenPercentGenerator(current, target)
{
    while (current < target)
    {
        //console.log("current", current, "target", target);

        //let addMe = Math.floor((target - current) / 10);
        let addMe = ((target - current) / 10);
        current +=  addMe < 1 ? 1 : addMe;
        yield current;
    }

    return;
}

(function()
{
    console.log("started");
    test(10);
    test(100);
    test(1000);
    test(10000);
    test(100000);
    test(1000000);
    test(10000000);
})();