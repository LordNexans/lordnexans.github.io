const songsList = [
    { title: "Vodka Rhum Contrex", album: "Copie Conforme", trackNumber: 1, singers: ["Mathias", "Paul"], src: "./song/copie-conforme/MathiasPaul-VodkaRhumContrex.mp3" },
    { title: "Dansez le chalançon", album: "Copie Conforme", trackNumber: 2, singers: ["Antoine"], src: "./song/copie-conforme/Antoine-Dansezlechalancon.mp3" },
    { title: "Skibidi", album: "Copie Conforme", trackNumber: 3, singers: ["Claire", "Antoine"], src: "./song/copie-conforme/ClaireAntoine-Skibidi.mp3" },
    { title: "Dimanche", album: "Copie Conforme", trackNumber: 4, singers: ["Mathias"], src: "./song/copie-conforme/Mathias-Dimanche.mp3" },
    { title: "I Fucked Yr Mom", album: "Copie Conforme", trackNumber: 5, singers: ["Claire"], src: "./song/copie-conforme/Claire-IFuckedYrMom.mp3" },
    { title: "Last Christmas", album: "Copie Conforme", trackNumber: 6, singers: ["Antoine"], src: "./song/copie-conforme/Antoine-LastChristmas.mp3" },
    { title: "On ne porte pas de sous vetement", album: "Copie Conforme", trackNumber: 7, singers: ["Claire", "Mathias"], src: "./song/copie-conforme/MathiasClaire-Onneportepasdesousvetements.mp3" },
    { title: "Bloody Mary", album: "Copie Conforme", trackNumber: 8, singers: ["Alice"], src: "./song/copie-conforme/Alice-BloodyMary.mp3" },
    { title: "PETETE", album: "Copie Conforme", trackNumber: 9, singers: ["Alice"], src: "./song/copie-conforme/Alice-PETETE.mp3" },
    // Add more songs as needed
];


let currentSongs = [...songsList];
let currentOrderMode = "album"; // Default ordering mode

function renderSongs() {
    const songsListDiv = document.getElementById("songsList");
    songsListDiv.innerHTML = "";

    if (currentOrderMode === "album") {
        // Group songs by album
        const groupedSongs = currentSongs.reduce((acc, song) => {
            if (!acc[song.album]) {
                acc[song.album] = [];
            }
            acc[song.album].push(song);
            return acc;
        }, {});

        // Display songs under each album
        for (const album in groupedSongs) {
            const albumDiv = document.createElement("div");
            albumDiv.innerHTML = `<h3>${album}</h3>`;
            groupedSongs[album].forEach(song => {
                const songItem = document.createElement("p");
                songItem.textContent = `- ${song.title}`;
                songItem.addEventListener("click", () => {
                    const audioPlayer = document.getElementById("audioPlayer");
                    audioPlayer.src = song.src;
                    audioPlayer.play();
                });
                albumDiv.appendChild(songItem);
            });
            songsListDiv.appendChild(albumDiv);
        }
    } else if (currentOrderMode === "singer") {
        // Group songs by singer
        const groupedSongs = currentSongs.reduce((acc, song) => {
            song.singers.forEach(singer => {
                if (!acc[singer]) {
                    acc[singer] = [];
                }
                acc[singer].push(song);
            });
            return acc;
        }, {});

        // Display songs under each singer
        for (const singer in groupedSongs) {
            const singerDiv = document.createElement("div");
            singerDiv.innerHTML = `<h3>${singer}</h3>`;
            groupedSongs[singer].forEach(song => {
                const songItem = document.createElement("p");
                songItem.textContent = `- ${song.title}`;
                songItem.addEventListener("click", () => {
                    const audioPlayer = document.getElementById("audioPlayer");
                    audioPlayer.src = song.src;
                    audioPlayer.play();
                });
                singerDiv.appendChild(songItem);
            });
            songsListDiv.appendChild(singerDiv);
        }
    }
}



document.getElementById("orderByAlbum").addEventListener("click", () => {
    currentOrderMode = "album";
    currentSongs = [...songsList].sort((a, b) => {
        if (a.album === b.album) {
            return a.trackNumber - b.trackNumber; // Sort by track number within the same album
        }
        return a.album.localeCompare(b.album);
    });
    renderSongs();
});

document.getElementById("orderBySinger").addEventListener("click", () => {
    currentOrderMode = "singer";
    currentSongs = [...songsList].sort((a, b) => {
        const singersA = a.singers.join(", ");
        const singersB = b.singers.join(", ");
        return singersA.localeCompare(singersB);
    });
    renderSongs();
});

renderSongs();