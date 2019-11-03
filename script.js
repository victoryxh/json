'use strict'

$(document).ready(() => {
    const setList = {
        "0": {
            "title": "Da Doo Ron Ron",
            "artist": "The Crystals",
            "genre": "Pop",
            "year": 1963
        },
        "1": {
            "title": "Wouldn't It Be Nice",
            "artist": "The Beach Boys",
            "genre": "Rock",
            "year": 1966
        },
        "2": {
            "title": "Good Vibrations",
            "artist": "The Beach Boys",
            "genre": "Rock",
            "year": 1966
        },
        "3": {
            "title": "Sgt. Pepper's Lonely Hearts Club Band",
            "artist": "The Beatles",
            "genre": "Rock",
            "year": 1967
        },
        "4": {
            "title": "Black Satin",
            "artist": "Miles Davis",
            "genre": "Jazz",
            "year": 1972
        },
        "5": {
            "title": "Ethnicolor",
            "artist": "Jean-Michel Jarre",
            "genre": "Electronic",
            "year": 1984
        },
        "6": {
            "title": "Broadway Boogie Woogie",
            "artist": "Ryuichi Sakamoto",
            "genre": "Electronic",
            "year": 1986
        },
        "7": {
            "title": "As I Crossed a Bridge of Dreams",
            "artist": "Stephan Micus",
            "genre": "New-age",
            "year": 1977
        },
        "8": {
            "title": "Kimi wa Tennen Shoku",
            "artist": "Eiichi Ohtaki",
            "genre": "Pop",
            "year": 1981
        },
        "9": {
            "title": "21st Century Schizoid Man",
            "artist": "King Crimson",
            "genre": "Rock",
            "year": 1969
        }
    };

    const setListStr = JSON.stringify(setList);
    $("#serialized").html(setListStr);

    const $oneTitle = $("#oneTitle");
    const $twoTitle = $("#twoTitle");
    const $threeTitle = $("#threeTitle");
    const $fourTitle = $("#fourTitle");
    const $fiveTitle = $("#fiveTitle");
    const $sixTitle = $("#sixTitle");
    const $sevenTitle = $("#sevenTitle");
    const $eightTitle = $("#eightTitle");
    const $nineTitle = $("#nineTitle");
    const $tenTitle = $("#tenTitle");

    const titles = [];
    titles.push($oneTitle, $twoTitle, $threeTitle, $fourTitle, $fiveTitle, $sixTitle, $sevenTitle, $eightTitle, $nineTitle, $tenTitle);

    const $oneArtist = $("#oneArtist");
    const $twoArtist = $("#twoArtist");
    const $threeArtist = $("#threeArtist");
    const $fourArtist = $("#fourArtist");
    const $fiveArtist = $("#fiveArtist");
    const $sixArtist = $("#sixArtist");
    const $sevenArtist = $("#sevenArtist");
    const $eightArtist = $("#eightArtist");
    const $nineArtist = $("#nineArtist");
    const $tenArtist = $("#tenArtist");

    const artists = [];
    artists.push($oneArtist, $twoArtist, $threeArtist, $fourArtist, $fiveArtist, $sixArtist, $sevenArtist, $eightArtist, $nineArtist, $tenArtist);

    const $oneGenre = $("#oneGenre");
    const $twoGenre = $("#twoGenre");
    const $threeGenre = $("#threeGenre");
    const $fourGenre = $("#fourGenre");
    const $fiveGenre = $("#fiveGenre");
    const $sixGenre = $("#sixGenre");
    const $sevenGenre = $("#sevenGenre");
    const $eightGenre = $("#eightGenre");
    const $nineGenre = $("#nineGenre");
    const $tenGenre = $("#tenGenre");

    const genres = [];
    genres.push($oneGenre, $twoGenre, $threeGenre, $fourGenre, $fiveGenre, $sixGenre, $sevenGenre, $eightGenre, $nineGenre, $tenGenre);

    const $oneYear = $("#oneYear");
    const $twoYear = $("#twoYear");
    const $threeYear = $("#threeYear");
    const $fourYear = $("#fourYear");
    const $fiveYear = $("#fiveYear");
    const $sixYear = $("#sixYear");
    const $sevenYear = $("#sevenYear");
    const $eightYear = $("#eightYear");
    const $nineYear = $("#nineYear");
    const $tenYear = $("#tenYear");

    const years = [];
    years.push($oneYear, $twoYear, $threeYear, $fourYear, $fiveYear, $sixYear, $sevenYear, $eightYear, $nineYear, $tenYear);

    const setListObject = JSON.parse(setListStr);

    titles[0].html(setListObject[0].title);

    for (let i = 0; i < titles.length; i++) {
        titles[i].html(setListObject[i].title);
    }

    for (let i = 0; i < artists.length; i++) {
        artists[i].html(setListObject[i].artist);
    }

    for (let i = 0; i < genres.length; i++) {
        genres[i].html(setListObject[i].genre);
    }

    for (let i = 0; i < years.length; i++) {
        years[i].html(setListObject[i].year);
    }

    const $button = $("#button");

    const display = function displaySelectedGenre() {
        let selected = document.getElementById("selected").selectedIndex;
        let op = document.getElementById("selected").options;
        if (op[selected].index == 0) {
            for (let i = 0; i < titles.length; i++) {
                titles[i].html(setListObject[i].title);
            }

            for (let i = 0; i < artists.length; i++) {
                artists[i].html(setListObject[i].artist);
            }

            for (let i = 0; i < genres.length; i++) {
                genres[i].html(setListObject[i].genre);
            }

            for (let i = 0; i < years.length; i++) {
                years[i].html(setListObject[i].year);
            }
        } else if (op[selected].index == 1) {
            for (let i = 0; i < titles.length; i++) {
                titles[i].html("");
                if (setListObject[i].genre == "Electronic") {
                    titles[i].html(setListObject[i].title);
                }
            }

            for (let i = 0; i < artists.length; i++) {
                artists[i].html("");
                if (setListObject[i].genre == "Electronic") {
                    artists[i].html(setListObject[i].artist);
                }
            }

            for (let i = 0; i < genres.length; i++) {
                genres[i].html("");
                if (setListObject[i].genre == "Electronic") {
                    genres[i].html(setListObject[i].genre);
                }
            }

            for (let i = 0; i < years.length; i++) {
                years[i].html("");
                if (setListObject[i].genre == "Electronic") {
                    years[i].html(setListObject[i].year);
                }
            }
        } else if (op[selected].index == 2) {
            for (let i = 0; i < titles.length; i++) {
                titles[i].html("");
                if (setListObject[i].genre == "New-age") {
                    titles[i].html(setListObject[i].title);
                }
            }

            for (let i = 0; i < artists.length; i++) {
                artists[i].html("");
                if (setListObject[i].genre == "New-age") {
                    artists[i].html(setListObject[i].artist);
                }
            }

            for (let i = 0; i < genres.length; i++) {
                genres[i].html("");
                if (setListObject[i].genre == "New-age") {
                    genres[i].html(setListObject[i].genre);
                }
            }

            for (let i = 0; i < years.length; i++) {
                years[i].html("");
                if (setListObject[i].genre == "New-age") {
                    years[i].html(setListObject[i].year);
                }
            }
        } else if (op[selected].index == 3) {
            for (let i = 0; i < titles.length; i++) {
                titles[i].html("");
                if (setListObject[i].genre == "Pop") {
                    titles[i].html(setListObject[i].title);
                }
            }

            for (let i = 0; i < artists.length; i++) {
                artists[i].html("");
                if (setListObject[i].genre == "Pop") {
                    artists[i].html(setListObject[i].artist);
                }
            }

            for (let i = 0; i < genres.length; i++) {
                genres[i].html("");
                if (setListObject[i].genre == "Pop") {
                    genres[i].html(setListObject[i].genre);
                }
            }

            for (let i = 0; i < years.length; i++) {
                years[i].html("");
                if (setListObject[i].genre == "Pop") {
                    years[i].html(setListObject[i].year);
                }
            }
        } else if (op[selected].index == 4) {
            for (let i = 0; i < titles.length; i++) {
                titles[i].html("");
                if (setListObject[i].genre == "Rock") {
                    titles[i].html(setListObject[i].title);
                }
            }

            for (let i = 0; i < artists.length; i++) {
                artists[i].html("");
                if (setListObject[i].genre == "Rock") {
                    artists[i].html(setListObject[i].artist);
                }
            }

            for (let i = 0; i < genres.length; i++) {
                genres[i].html("");
                if (setListObject[i].genre == "Rock") {
                    genres[i].html(setListObject[i].genre);
                }
            }

            for (let i = 0; i < years.length; i++) {
                years[i].html("");
                if (setListObject[i].genre == "Rock") {
                    years[i].html(setListObject[i].year);
                }
            }
        }
        return false;
    }

    $button.click(display);

});