document.addEventListener("DOMContentLoaded", function() {
    // Paste your complete M3U file content below between the backticks.
    const m3uData = `
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Sports",CCTV 央视台球
http://117.161.133.51:81/gitv_live/G_TAIQIU-CQ/G_TAIQIU-CQ.m3u8?p=GITV

#EXTINF:-1 tvg-id="CCTVStormFootball.cn" tvg-logo="https://i.imgur.com/Fy6HkX0.png" group-title="Sports",CCTV 风云足球
http://117.161.133.51:81/gitv_live/G_FENGSHANGZQ-CQ/G_FENGSHANGZQ-CQ.m3u8?p=GITV

#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Sports",CCTV 高尔夫网球
http://117.161.133.51:81/gitv_live/G_CCTV-GOLF-CQ/G_CCTV-GOLF-CQ.m3u8?p=GITV

#EXTINF:-1 tvg-id="CDNDeportes.do" tvg-logo="https://i.imgur.com/yU5LqTL.png" group-title="Sports",CDN Deporte (720p)
https://rtmp-live-ingest-us-east-1-universe-dacast-com.akamaized.net/transmuxv1/streams/bc949011-1dd8-4d10-596c-f6910d4a9cf7.m3u8

#EXTINF:-1 tvg-id="CDR.cl" tvg-logo="https://i.imgur.com/xevZNi6.png" group-title="Sports",CDR (720p)
https://live-hls-xgod.livepush.io/live_cdn/emaf6CHYV7M-RQcL2/index.m3u8
#EXTINF:-1 tvg-id="CampusLore.us" tvg-logo="https://i.imgur.com/dCXl0rq.png" group-title="Sports",CampusLore (720p)  
https://linear-235.frequency.stream/dist/glewedtv/235/hls/master/playlist.m3u8

#EXTINF:-1 tvg-id="AlfaSport.cy" tvg-logo="https://i.imgur.com/vhMPYIW.png" group-title="Sports",Alfa Sport (1080p) [Not 24/7]
https://dev.aftermind.xyz/edge-hls/unitrust/alfasports/index.m3u8?token=8TXWzhY3h6jrzqEqx

#EXTINF:-1 tvg-id="AlkassFive.qa" tvg-logo="https://i.imgur.com/6RGNGsM.png" group-title="Sports",Alkass Five (1080p)
https://liveakgr.alkassdigital.net/hls/live/2097037/Alkass5nnha/master.m3u8

#EXTINF:-1 tvg-id="AlkassFour.qa" tvg-logo="https://i.imgur.com/iDL65Wu.png" group-title="Sports",Alkass Four (1080p)
https://liveakgr.alkassdigital.net/hls/live/2097037/Alkass4cn/master.m3u8

#EXTINF:-1 tvg-id="AlkassOne.qa" tvg-logo="https://i.imgur.com/10mmlha.png" group-title="Sports",Alkass One (1080p)
https://liveakgr.alkassdigital.net/hls/live/2097037/Alkass1mhu/master.m3u8

#EXTINF:-1 tvg-id="AlkassSHOOF.qa" tvg-logo="https://shoof.alkass.net/assets/images/shoof.png" group-title="Sports",Alkass SHOOF (1080p)
https://liveakgr.alkassdigital.net/hls/live/2097037/Alkass6Shoof1/master.m3u8

#EXTINF:-1 tvg-id="AlkassSix.qa" tvg-logo="https://i.imgur.com/CrPSPSC.png" group-title="Sports",Alkass Six (1080p)
https://liveakgr.alkassdigital.net/hls/live/2097037/Alkass6buzat/master.m3u8

#EXTINF:-1 tvg-id="AlkassThree.qa" tvg-logo="https://i.imgur.com/d57BdFh.png" group-title="Sports",Alkass Three (1080p)
https://liveakgr.alkassdigital.net/hls/live/2097037/Alkass3vak/master.m3u8

#EXTINF:-1 tvg-id="AlkassTwo.qa" tvg-logo="https://i.imgur.com/8w61kFX.png" group-title="Sports",Alkass Two (1080p)
https://liveakgr.alkassdigital.net/hls/live/2097037/Alkass2hef/master.m3u8
    `;

    // Function to parse the M3U data and return an array of channel objects
    function parseM3U(data) {
        const lines = data.split('\n');
        const channels = [];
        let currentChannel = {};

        for (let line of lines) {
            line = line.trim();
            if (!line) continue;
            if (line.startsWith('#EXTINF')) {
                // Extract channel name (text after the last comma)
                const commaIndex = line.lastIndexOf(',');
                const name = commaIndex !== -1 ? line.substring(commaIndex + 1).trim() : '';
                // Optionally, extract group-title
                const groupMatch = line.match(/group-title="([^"]+)"/);
                const group = groupMatch ? groupMatch[1] : '';
                currentChannel = { name, group };
            } else if (line.startsWith('http') && line.includes('.m3u8')) {
                currentChannel.url = line;
                channels.push(currentChannel);
                currentChannel = {};
            }
        }
        return channels;
    }

    // Parse the full M3U data into an array of channels
    const channels = parseM3U(m3uData);

    // Get the container for channels and the video player element from your HTML
    const channelContainer = document.getElementById('channels');
    const videoPlayer = document.getElementById('videoPlayer');

    // Function to load a selected channel into the video player using HLS.js
    function loadChannel(url) {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(videoPlayer);
        } else if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
            videoPlayer.src = url;
        }
        videoPlayer.play();
    }

    // Dynamically populate the channel list with all channels from the M3U data
    channels.forEach(ch => {
        const div = document.createElement('div');
        div.className = 'channel';
        // Display the channel name (and group if desired)
        div.innerText = `${ch.name} [${ch.group}]`;
        div.addEventListener('click', () => loadChannel(ch.url));
        channelContainer.appendChild(div);
    });

    // Optionally, load the first channel by default
    if (channels.length > 0) {
        loadChannel(channels[0].url);
    }
});
