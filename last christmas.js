var numFriends = parseInt(readline());
var numPieces = parseInt(readline());

var ans = "IMPOSSIBLE";
for (var i = 1; i < numFriends; i++) {
    if ((i * numPieces) % numFriends === 1 && (i * numPieces) % numFriends < 1000) {
        ans = i;
    }
}

print(ans);