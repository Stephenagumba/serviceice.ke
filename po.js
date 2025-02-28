document.addEventListener("DOMContentLoaded", function() {
    // Paste your complete M3U file content below between the backticks.
    const m3uData = ` 
#EXTM3U
#EXTINF:-1 group-title="LIVE" tvg-chno="" tvg-id="" tvg-logo="https://image.tsports.com/images/contents/thumbnail/261/ts-live-02.jpeg", T Sports Live 2
#EXTVLCOPT:http-user-agent=https://github.com/byte-capsule (Linux;Android 14)
#EXTHTTP:{"cookie":"Edge-Cache-Cookie=URLPrefix=aHR0cHM6Ly9saXZlLWNkbi50c3BvcnRzLmNvbS8:Expires=1705007554:KeyName=tsports-ed25519-01:Signature=rvsNaCDMRsm4df7UmpXAmNVWkyrPnXRCoSYE_v3aVvldpT3qJLFq6E-MgqU1Eq-G4hu2maHLVCwPua4gQVJ-DQ"}
https://live-cdn.tsports.com/live-02/index.m3u8
#EXTINF:-1 group-title="LIVE" tvg-chno="" tvg-id="" tvg-logo="https://image.tsports.com/images/contents/thumbnail/691/mobile_logo_LIVE(1)_64e4dd8e16430.jpg", T Sports Live 1
#EXTVLCOPT:http-user-agent=https://github.com/byte-capsule (Linux;Android 14)
#EXTHTTP:{"cookie":"Edge-Cache-Cookie=URLPrefix=aHR0cHM6Ly9saXZlLWNkbi50c3BvcnRzLmNvbS8:Expires=1705007554:KeyName=tsports-ed25519-01:Signature=rvsNaCDMRsm4df7UmpXAmNVWkyrPnXRCoSYE_v3aVvldpT3qJLFq6E-MgqU1Eq-G4hu2maHLVCwPua4gQVJ-DQ"}
https://live-cdn.tsports.com/live-01/index.m3u8
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
