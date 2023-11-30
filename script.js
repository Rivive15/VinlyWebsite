let vinyls = [
//vinyl 1
{
    "vinylimg":``,
    "vinylname": "Simpiternal",
    "vinyldescription": String.raw`Sempiternal is the fourth studio album by British rock band Bring Me the Horizon. 
    It was released on 1 April 2013 worldwide through RCA Records, a subsidiary label of Sony Music, and 2 April 2013 in the United States and Canada through Epitaph Records. 
    It is the first album to feature former Worship keyboardist Jordan Fish and the first with guitarist Lee Malia playing both lead and rhythm components.
    Written and recorded throughout 2012, Sempiternal showed the band pull diverse influences from nu metal, electronic music, ambient music and pop. 
    "Sempiternal" is an archaic English word denoting the concept of "everlasting time" that can never actually come to pass. 
    It stems from the Latin word "sempiternus" (a concatenation of root "semper" and suffix "aeternum").
    The album spawned four singles ("Shadow Moses"; "Sleepwalking"; "Go to Hell, for Heaven's Sake"; and "Can You Feel My Heart"). 
    The album made its debut at No. 3 on the UK Album Chart and is their second successive album to top the ARIA Charts in Australia. 
    It also managed to reach No. 11 on the US Billboard 200 with 27,522 first week sales, 
    making Sempiternal the band's highest charting album in America until That's the Spirit debuted at No. 2 in 2015. 
    Upon its release, the album received critical acclaim.`, 
    
    "spotifysrc": `https://open.spotify.com/embed/album/6IYPmM3xsOPL2XPSvf1ZAz?utm_source=generator&theme=0`,
},
//vinyl 2
{
    "vinylname": "POST HUMAN:SURVIVAL HORROR",
    "vinyldescription": String.raw`Post Human: Survival Horror is a commercial release by British rock band Bring Me the Horizon. 
    It was released on 30 October 2020 and is intended to be the first in a series of four projects to be released by the band under the Post Human name. 
    The release was produced by frontman Oliver Sykes and keyboardist Jordan Fish, with additional production from composer Mick Gordon. 
    Stylistically, the release marks return to the heavier and more aggressive metalcore sound of the band's earlier material.
    The release was preceded by four singles: "Ludens", 
    which was also previously released as a single on the Timefall soundtrack for Death Stranding, "Parasite Eve", "Obey", and "Teardrops". 
    The release received generally positive reviews from critics and became the band's second UK No.1 release. 
    The second Post Human installment, Post Human: Nex Gen, originally set to be released on 15 September 2023, 
    has been delayed due to "unforeseen circumstances" leaving the band "unable to complete the record to the standard we'd be happy with".`,
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
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
},
//vinyl 5
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
},
//vinyl 6
{
    "vinylname": "",
    "vinyldescription": "",
    "spotifysrc": String.raw``,
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