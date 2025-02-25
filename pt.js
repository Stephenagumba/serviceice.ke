document.addEventListener("DOMContentLoaded", function() {
    const channels = [
        { name: "00s Replay", url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/62ba60f059624e000781c436/master.m3u8" },
        { name: "1+2", url: "http://89.254.128.5:22280/1_2/mono.m3u8" },
        { name: "1-2-3 TV", url: "https://123tv-mx1.flex-cdn.net/index.m3u8" },
        { name: "1Almere TV", url: "https://d3472rjicrodic.cloudfront.net/nlpo/clr-nlpo/709d5260/index.m3u8" },
        { name: "1KZN TV", url: "https://cdn.freevisiontv.co.za/sttv/smil:1kzn.stream.smil/playlist.m3u8" },
        { name: "1Music Channel Hungary", url: "http://1music.hu/1music.m3u8" },
        { name: "1TV", url: "https://tv.cdn.xsg.ge/gpb-1tv/index.m3u8" },
        { name: "1Twente TV", url: "https://ms2.mx-cd.net/dtv-10/198-989148/1Twente_TV.smil/playlist.m3u8" },
        { name: "002 Radio TV", url: "https://cdn.002radio.com:3909/live/radio002live.m3u8" },
        { name: "2GB Sydney", url: "https://2gblive.akamaized.net/hls/live/2033805/2GB/index.m3u8" },
        { name: "2M Monde", url: "https://cdn-globecast.akamaized.net/live/eds/2m_monde/hls_video_ts_tuhawxpiemz257adfc/2m_monde.m3u8" },
        { name: "3/24", url: "https://directes-tv-int.ccma.cat/live-origin/canal324-hls/master.m3u8" },
        { name: "3ABN English", url: "https://3abn.bozztv.com/3abn2/3abn_live/smil:3abn_live.smil/playlist.m3u8" },
        { name: "3ABN Latino", url: "https://3abn.bozztv.com/3abn2/Lat_live/smil:Lat_live.smil/playlist.m3u8" },
        { name: "3ABN Kids", url: "https://3abn.bozztv.com/3abn2/Kids_live/smil:Kids_live.smil/playlist.m3u8" }
    ];

    const channelContainer = document.getElementById("channels");
    const videoPlayer = document.getElementById("videoPlayer");

    function loadChannel(url) {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(videoPlayer);
        } else if (videoPlayer.canPlayType("application/vnd.apple.mpegurl")) {
            videoPlayer.src = url;
        }
        videoPlayer.play();
    }

    channels.forEach(channel => {
        const div = document.createElement("div");
        div.className = "channel";
        div.innerText = channel.name;
        div.addEventListener("click", () => loadChannel(channel.url));
        channelContainer.appendChild(div);
    });

    // Load first channel by default
    if (channels.length > 0) {
        loadChannel(channels[0].url);
    }
});