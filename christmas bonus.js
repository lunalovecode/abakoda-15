var numFriends = parseInt(readline());
var numPieces = parseInt(readline());
var x = parseInt(readline());
var y = parseInt(readline());

var ans = "IMPOSSIBLE";
for (var i = 0; i < numFriends; i++) {
    if ((i * numPieces) % numFriends === 1) {
        ans = i;
    }
}

print(ans);

/*
1000000000
76923077
-1
13
*/