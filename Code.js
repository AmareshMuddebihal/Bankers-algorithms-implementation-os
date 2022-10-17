<script>

	let n, m, i, j, k;

n = 5; // Number of processes

m = 3; // Number of resources

let alloc = [ [ 0, 1, 0 ], // P0 // Allocation Matrix

				[ 2, 0, 0 ], // P1

				[ 3, 0, 2 ], // P2

				[ 2, 1, 1 ], // P3

				[ 0, 0, 2 ] ]; // P4

let max = [ [ 7, 5, 3 ], // P0 // MAX Matrix

			[ 3, 2, 2 ], // P1

			[ 9, 0, 2 ], // P2

			[ 2, 2, 2 ], // P3

			[ 4, 3, 3 ] ]; // P4

let avail = [ 3, 3, 2 ]; // Available Resources

let f = [], ans = [], ind = 0;

for (k = 0; k < n; k++) {

	f[k] = 0;

}

let need = [];

for (i = 0; i < n; i++) {

	let need1 = [];

	for (j = 0; j < m; j++)

	need1.push(max[i][j] - alloc[i][j]);

	need.push(need1);

}

let y = 0;

for (k = 0; k < 5; k++) {

	for (i = 0; i < n; i++) {

	if (f[i] == 0) {

		let flag = 0;

		for (j = 0; j < m; j++) {

		if (need[i][j] > avail[j]){

			flag = 1;

			break;

		}

		}

		if (flag == 0) {

		ans[ind++] = i;

		for (y = 0; y < m; y++)

			avail[y] += alloc[i][y];

		f[i] = 1;

		}

	}

	}

}

document.write("Following is the SAFE Sequence" + "<br>");

for (i = 0; i < n - 1; i++)

	document.write(" P" + ans[i] + " ->");

document.write( " P" + ans[n - 1] + "<br>");

</script>
