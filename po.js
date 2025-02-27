document.addEventListener("DOMContentLoaded", function() {
    // Paste your complete M3U file content below between the backticks.
    const m3uData = ` 
#EXTM3U
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

#EXTINF:-1 tvg-id="AbuDhabiSports1.ae" tvg-logo="https://i.imgur.com/6BVWk8z.png" group-title="Sports",Abu Dhabi Sports 1
https://vo-live-media.cdb.cdn.orange.com/Content/Channel/AbuDhabiSportsChannel1/HLS/index.m3u8

#EXTINF:-1 tvg-id="AbuDhabiSports2.ae" tvg-logo="https://i.imgur.com/4rVm3oZ.png" group-title="Sports",Abu Dhabi Sports 2
https://tr-live-route.adm.tcon.hlit.hvds.tv/Content/Channel/AbuDhabiSportsChannel2/DASH/master.mpd

#EXTINF:-1 tvg-id="ACCDigitalNetwork.us" tvg-logo="https://i.imgur.com/V6Kaqha.png" group-title="Sports",ACCDN (1080p)
https://aegis-cloudfront-1.tubi.video/ce6650c2-26ea-4433-9276-8a5ebf3992cc/playlist.m3u8

#EXTINF:-1 tvg-id="ACLCornholeTV.us" tvg-logo="https://i.imgur.com/lBIq2ZD.png" group-title="Sports",ACL Cornhole TV (1080p)
https://1815337252.rsc.cdn77.org/HLS/CORNHOLETV.m3u8

#EXTINF:-1 tvg-id="ActionSports.de" tvg-logo="https://i.imgur.com/xiTUsnA.png" group-title="Sports",Action Sports
http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5be1be871843b56328bc3ef1/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=84ac0870-4b92-11ef-aece-533610f1ea34&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=a89100a8-8115-4b28-9869-072164526f31

#EXTINF:-1 tvg-id="beINsports1.fr" tvg-logo="https://i.imgur.com/qC8jMiD.png" group-title="Sports",beIN Sports 1 (1080p)
http://example.com/beinsports1.m3u8
#EXTINF:-1 tvg-id="beINsports2.fr" tvg-logo="https://i.imgur.com/qC8jMiD.png" group-title="Sports",beIN Sports 2 (1080p)
http://example.com/beinsports2.m3u8
#EXTINF:-1 tvg-id="ESPN.us" tvg-logo="https://i.imgur.com/xDq9iwU.png" group-title="Sports",ESPN (720p)
http://example.com/espn.m3u8
#EXTINF:-1 tvg-id="FoxSports.us" tvg-logo="https://i.imgur.com/3H3sI2q.png" group-title="Sports",Fox Sports (1080p)
http://example.com/foxsports.m3u8
#EXTINF:-1 tvg-id="NBA.tv" tvg-logo="https://i.imgur.com/XbT3eQ9.png" group-title="Sports",NBA TV (720p)
http://example.com/nbatv.m3u8
#EXTINF:-1 tvg-id="Eurosport1.de" tvg-logo="https://i.imgur.com/Yz5mMHK.png" group-title="Sports",Eurosport 1 (1080p)
http://example.com/eurosport1.m3u8
#EXTINF:-1 tvg-id="Eurosport2.de" tvg-logo="https://i.imgur.com/Yz5mMHK.png" group-title="Sports",Eurosport 2 (1080p)
http://example.com/eurosport2.m3u8
#EXTINF:-1 tvg-id="SkySportsFootball.uk" tvg-logo="https://i.imgur.com/7eV5Y2F.png" group-title="Sports",Sky Sports Football (720p)
http://example.com/skysportsfootball.m3u8
#EXTINF:-1 tvg-id="SkySportsF1.uk" tvg-logo="https://i.imgur.com/mKqI1Vi.png" group-title="Sports",Sky Sports F1 (1080p)
http://example.com/skysportsf1.m3u8
#EXTINF:-1 tvg-id="WWE.us" tvg-logo="https://i.imgur.com/Wypx6Ix.png" group-title="Sports",WWE Network (720p)
http://example.com/wwe.m3u8
#EXTINF:-1 tvg-id="Esport3.es" tvg-logo="https://i.imgur.com/tkjUFzb.png" group-title="Sports",Esport3 (1080p) [Geo-blocked]
https://directes-tv-cat.ccma.cat/live-origin/esport3-hls/master.m3u8

#EXTINF:-1 tvg-id="ESR24x7eSportsNetwork.us" tvg-logo="https://satelliteprome.com/wp-content/uploads/2021/01/ESR-network.jpg" group-title="Sports",ESR 24x7 eSports Network (1080p)
https://eyeonesports.com/ES2RA-628g.m3u8

#EXTINF:-1 tvg-id="ESTV.us" tvg-logo="https://i.imgur.com/qHNV0f5.png" group-title="Sports",ESTV (1080p)
https://estv-rakuten-samsung.amagi.tv/playlist.m3u8

#EXTINF:-1 tvg-id="etvNewsSport.za" tvg-logo="https://i.imgur.com/lXMzsNM.png" group-title="News",ETVN (720p)
https://origin2.afxp.telemedia.co.za/abr_kapang/enterepreneur/playlist.m3u8

#EXTINF:-1 tvg-id="MAVTVSelect.us" tvg-logo="https://i.imgur.com/O4bSCt1.png" group-title="Sports",MAV Select USA
https://d3h07n6l1exhds.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-0z2yyo4dxctc7/playlist.m3u8

#EXTINF:-1 tvg-id="MAVTV.us" tvg-logo="https://i.imgur.com/4fqvwEk.png" group-title="Sports",Mav TV
https://mavtv-mavtvglobal-1-in.samsung.wurl.tv/playlist.m3u8

#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",MAVTV Motor Sports UK
https://amg00378-maverickenterta-mavtv-smn-gb-samsung-rakuten-ozity.amagi.tv/playlist/amg00378-maverickenterta-mavtv-smn-gb-samsung-rakuten/playlist.m3u8
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
