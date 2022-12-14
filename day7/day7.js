class File {
    size = 0
    fileName = ""
    constructor(fileSize, fileName) {
        this.size = fileSize;
        this.fileName = fileName;
    }

    get fileName() {
        return this.fileName
    }
    get size() {
        return this.size
    }
}

tree = {"/":{}}

input = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`.split("\n")

path = ""

for (var i = 0; i < input.length; i++) {
    fileSize = input[i].split(" ")[0]
    fileName = input[i].split(" ")[1]
    console.log("Path: " + path)
    if (input[i][0] == "$") {
        console.log("Read command:" + input[i])
        if (fileName == "ls") { // skip iteration
            continue;
        }
        if (fileName == "cd") {
            if (path.length > 0) {
                path += "[" + input[i].split(" ")[2] + "]"
            } else {
                path += input[i].split(" ")[2]
            }
        }
    } else if (fileSize == "dir") {
        // make directory
        convPath = convertPathToDotNot(path)
        console.log("Converted Path: " + convPath)
        console.log(tree)
        tree[path][fileName] = {}
    } else {
        // make file
        convPath = convertPathToDotNot(path)
        console.log("Converted Path: " + convPath)
        console.log(tree)
        tree[path][fileName] = new File(fileSize, fileName)
    }
}

function convertPathToDotNot(pathName) {
    out = pathName
    out = "/" + out.slice(1)
    console.log("Out: " + out)
    console.log("Converted " + pathName + " to " + out + " of type " + typeof out)
    return out
}

function composePath(pathName, fileName) {
    if(pathName.length == 0) { // root
        return fileName
    }
    //pathName.replace(/(,)/, ".")
    return pathName + "/" + fileName
}


console.log(tree)