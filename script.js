let vinyls = [
//vinyl 1
{
    "vinylimg":``,
    "vinylname": "Simpiternal",
    "vinyldescription": String.raw`Fourth studio album by the British metalcore band Bring Me the Horizon. The album features three singles, 'Shadow Moses', 'Sleepwalking' and 'And the Snakes Start to Sing'. The album, the title of which means 'everlasting life', entered the UK Albums Chart at #3.`, 
    
    "spotifysrc": `https://open.spotify.com/embed/album/6IYPmM3xsOPL2XPSvf1ZAz?utm_source=generator&theme=0`,
},
//vinyl 2
{
    "vinylname": "POST HUMAN:SURVIVAL HORROR",
    "vinyldescription": String.raw`Continuing to push their creative boundaries, even during lockdown, the band have created a body of work that is arguably one of their most exciting, diverse, intricate pieces of music to date. The first two tracks from the EP 'Parasite Eve' and the recent colossus 'Obey' featuring fellow Brit YUNGBLUD, have received critical acclaim and amassed over 115 Million audio and video streams combined to date. Other guests on the EP include BABYMETAL, Nova Twins and Amy Lee from Evanescence.`,
    "spotifysrc": `https://open.spotify.com/embed/album/0e1WaSNDZnoPixaxDNdWo4?utm_source=generator`,
},
//vinyl 3
{
    "vinylname": "The New Abnormal",
    "vinyldescription": String.raw`The New Abnormal is the sixth studio album by American rock band the Strokes, released on April 10, 2020, through Cult and RCA Records. 
    It was their first full-length album since Comedown Machine (2013), marking the longest gap between studio albums by the band. 
    The album was produced by Rick Rubin and recorded at his Shangri-La studio in Malibu, California, with additional recording taking place at studios in Los Angeles County and Hawaii. 
    The Strokes began performing songs from the album for the first time throughout 2019 before revealing the album's track list and cover art in early 2020. 
    "At the Door", "Bad Decisions", and "Brooklyn Bridge to Chorus" were released as singles prior to the album's release, with "The Adults Are Talking" being released to radio months later.
    The New Abnormal received very positive reviews from critics, many of whom considered it a return to form for the band. 
    Praise was directed particularly towards the maturity of singer Julian Casablancas' lyrics as well as the band's improved sense of musical cohesion. 
    The album reached No. 1 in Scotland and the top ten in six other countries, including the United States and the United Kingdom. 
    It also won the Grammy Award for Best Rock Album at the 63rd Annual Grammy Awards in 2021, the band's first nomination and win.`,
    "spotifysrc": `https://open.spotify.com/embed/album/2xkZV2Hl1Omi8rk2D7t5lN?utm_source=generator`,
},
//vinyl 4
{
    "vinylname": "Swimming",
    "vinyldescription": "The fifth studio album by American rapper and singer, and the last album to be released during his lifetime. Production on the album was handled by Miller himself, as well as Dev Hynes, J. Cole, Dâm-Funk, DJ Dahi, Tae Beast, Flying Lotus, and Cardo, among others. The album has no credited features, but contains vocal contributions from Dâm-Funk, Dev Hynes, Snoop Dogg, Syd, Thundercat, and JID. Features the singles 'Small Worlds', 'Self Care' and 'What's the Use?'.",
    "spotifysrc": String.raw`https://open.spotify.com/embed/album/5wtE5aLX5r7jOosmPhJhhk?utm_source=generator`,
},
//vinyl 5
{
    "vinylname": "Circles",
    "vinyldescription": "'Circles' is the sixth and final studio album by Mac Miller. Conceived as a sister album to 2018's full length, 'Swimming'. While sonically distinctly different than its predecessor, 'Circles' features many of the hallmarks for which 'Swimming' was critically-acclaimed upon its release - Miller further realising his singing voice in addition to rapping, live instrumentation and earnest, confessional lyrical content.",
    "spotifysrc": String.raw`https://open.spotify.com/embed/album/5sY6UIQ32GqwMLAfSNEaXb?utm_source=generator`,
},
//vinyl 6
{
    "vinylname": "Actual Life 3",
    "vinyldescription": "",
    "spotifysrc": String.raw`https://open.spotify.com/embed/album/5q2iMctlDvEMYVIawF6Vop?utm_source=generator`,
},
//vinyl 7
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
},
//vinyl 8
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
},
//vinyl 9
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
},
//vinyl 10
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
},
//vinyl 11
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
},
//vinyl 12
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
},
//vinyl 13
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
},
//vinyl 14
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
},
//vinyl 15
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
},
//vinyl 16
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
},
//vinyl 17
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
},
//vinyl 18
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
},
//vinyl 19
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
},
//vinyl 20
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
},
//vinyl 21
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
},
//vinyl 22
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
}
]

function CurrentVinyl(n)
{
    const spotifystyle = document.getElementById("spotify");      //spotify style
    spotifystyle.setAttribute("style", "border-radius:12px" );

    const spotifysrc = document.getElementById("spotify");        //spotify source
    spotifysrc.setAttribute("src", vinyls[n].spotifysrc);

    const spotifywidth = document.getElementById("spotify");      //spotify width
    spotifywidth.setAttribute("width", "30%");

    const spotifyheight = document.getElementById("spotify");     //spotify height
    spotifyheight.setAttribute("height", "480");

    const spotifyframeborder = document.getElementById("spotify");//spotify border
    spotifyframeborder.setAttribute("frameBorder", "0");

    const spotifyfullscreen = document.getElementById("spotify"); //spotify fullscreen
    spotifyfullscreen.setAttribute("allowfullscreen", ""); 

    const spotifyallow = document.getElementById("spotify");      //spotify allow
    spotifyallow.setAttribute("allow","autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture");  

    const spotifyloading = document.getElementById("spotify");    //spotify loading
    spotifyloading.setAttribute("loading", "lazy");  
    
    const albumlname = document.getElementById("albumname");
    albumlname.innerHTML = vinyls[n].vinylname;
    const albumdescription = document.getElementById("albumdescription");
    albumdescription.innerHTML = vinyls[n].vinyldescription;
}

let OpenDescription;
document.addEventListener("DOMContentLoaded", function()
{
    OpenDescription = () =>
    {
            const elem = document.getElementById("description");
            elem.style.visibility = "visible";
    }
});

let CloseDescription;
document.addEventListener("DOMContentLoaded", function()
{
    CloseDescription = () =>
    {
        const elem = document.getElementById("description");
        elem.style.visibility = "hidden";
    }
})