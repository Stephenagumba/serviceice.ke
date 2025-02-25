document.addEventListener("DOMContentLoaded", function() {
    // Paste your complete M3U file content below between the backticks.
    const m3uData = `
#EXTM3U
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",00s Replay
http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/62ba60f059624e000781c436/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c25e430-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=1b7de8e4-d114-4438-b098-6f7aee77b4be
#EXTINF:-1 tvg-id="1Plus2.lv" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/d/d9/1%2B2.svg/revision/latest/scale-to-width-down/512" group-title="Undefined",1+2
http://89.254.128.5:22280/1_2/mono.m3u8
#EXTINF:-1 tvg-id="123tv.de" tvg-logo="https://i.imgur.com/slSUDNX.png" group-title="Shop",1-2-3 TV (270p)
https://123tv-mx1.flex-cdn.net/index.m3u8
#EXTINF:-1 tvg-id="1AlmereTV.nl" tvg-logo="https://i.imgur.com/XfkbTrU.png" group-title="General",1Almere TV (720p)
https://d3472rjicrodic.cloudfront.net/nlpo/clr-nlpo/709d5260/index.m3u8
#EXTINF:-1 tvg-id="1KZNTV.za" tvg-logo="https://admango.cdn.mangomolo.com/analytics/uploads/188/6544bebaae.jpg" group-title="Entertainment;Family;General",1KZN TV (576p)
https://cdn.freevisiontv.co.za/sttv/smil:1kzn.stream.smil/playlist.m3u8
#EXTINF:-1 tvg-id="MusicChannel.hu" tvg-logo="https://i.imgur.com/pzU6FrQ.png" group-title="Music",1Music Channel Hungary (576p)
http://1music.hu/1music.m3u8
#EXTINF:-1 tvg-id="1TV.ge" tvg-logo="https://i.imgur.com/FSkYLPK.png" group-title="General",1TV (720p)
https://tv.cdn.xsg.ge/gpb-1tv/index.m3u8
#EXTINF:-1 tvg-id="1TwenteTV.nl" tvg-logo="https://i.imgur.com/ftiuNK3.png" group-title="General",1Twente TV (1080p)
https://ms2.mx-cd.net/dtv-10/198-989148/1Twente_TV.smil/playlist.m3u8
#EXTINF:-1 tvg-id="002RadioTV.do" tvg-logo="https://i.imgur.com/7oNe8xj.png" group-title="General",002 Radio TV (720p)
https://cdn.002radio.com:3909/live/radio002live.m3u8
#EXTINF:-1 tvg-id="2GB.au" tvg-logo="https://i.ibb.co/jwM8DFG/2GB-1.png" group-title="News",2GB Sydney (1080p)
https://2gblive.akamaized.net/hls/live/2033805/2GB/index.m3u8
#EXTINF:-1 tvg-id="2MMonde.ma" tvg-logo="https://i.imgur.com/MvpntzA.png" group-title="General" user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0",2M Monde (360p)
#EXTVLCOPT:http-referrer=http://www.radio2m.ma/
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0
https://cdn-globecast.akamaized.net/live/eds/2m_monde/hls_video_ts_tuhawxpiemz257adfc/2m_monde.m3u8
#EXTINF:-1 tvg-id="2TV.ge" tvg-logo="https://i.imgur.com/FJBL6zI.png" group-title="General",2TV (720p)
https://tv.cdn.xsg.ge/gpb-2tv/index.m3u8
#EXTINF:-1 tvg-id="324.es" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/2/21/324_%28CCMA%29_logo.svg/revision/latest/scale-to-width-down/512" group-title="News",3/24 (1080p)
https://directes-tv-int.ccma.cat/live-origin/canal324-hls/master.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",3ABN Canada
https://3abn.bozztv.com/3abncanada/3ABN/master.m3u8
#EXTINF:-1 tvg-id="DareToDreamNetwork.us" tvg-logo="https://i.imgur.com/JwCLwQ2.png" group-title="Religious",3ABN Dare To Dream Network
https://3abn.bozztv.com/3abn2/d2d_live/smil:d2d_live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="3ABNEnglish.us" tvg-logo="https://i.imgur.com/bgJQIyW.png" group-title="Religious",3ABN English
https://3abn.bozztv.com/3abn2/3abn_live/smil:3abn_live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="3ABNFrench.us" tvg-logo="https://i.imgur.com/B5gsM7m.png" group-title="Religious",3ABN French
https://3abn.bozztv.com/3abn2/Fre_live/smil:Fre_live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="3ABNInternational.us" tvg-logo="https://i.imgur.com/8YMLPA3.png" group-title="Religious",3ABN International
https://3abn.bozztv.com/3abn2/Int_live/smil:Int_live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="3ABNKids.us" tvg-logo="https://i.imgur.com/SUPQAok.png" group-title="Animation;Kids;Religious",3ABN Kids
https://3abn.bozztv.com/3abn2/Kids_live/smil:Kids_live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="3ABNLatino.us" tvg-logo="https://i.imgur.com/If6rCuD.png" group-title="Religious",3ABN Latino
https://3abn.bozztv.com/3abn2/Lat_live/smil:Lat_live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="3ABNPraiseHimMusicNetwork.us" tvg-logo="https://i.imgur.com/iBcqT8L.png" group-title="Music;Religious",3ABN Praise Him Music Network
https://3abn.bozztv.com/3abn1/PraiseHim/smil:PraiseHim.smil/playlist.m3u8
#EXTINF:-1 tvg-id="3ABNProclaimNetwork.us" tvg-logo="https://yt3.googleusercontent.com/ytc/AIdro_mb4TLclxAUPvlnV84blg4YSnZYjspMitP_sS2rX_5IYQ=s512-c-k-c0x00ffffff-no-rj" group-title="Religious",3ABN Proclaim! Network
https://3abn.bozztv.com/3abn2/Pro_live/smil:Pro_live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="3ABNTVUganda.ug" tvg-logo="https://i.imgur.com/mml9lI2.png" group-title="Religious",3ABN TV Uganda (720p) [Not 24/7]
https://3abn.bozztv.com/3abn/3abn_uganda_live/index.m3u8
#EXTINF:-1 tvg-id="3AW.au" tvg-logo="https://i.imgur.com/Z4MdB0S.png" group-title="News",3AW Melbourne (1080p)
https://3awlive.akamaized.net/hls/live/2032295/3AW/index.m3u8
#EXTINF:-1 tvg-id="3HD.th" tvg-logo="https://i.imgur.com/YRiulCU.png" group-title="General",3HD
http://appdootv2.dootvde.com:1935/live/50001_ch3.stream.smil/playlist.m3u8
#EXTINF:-1 tvg-id="3sat.de" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/3sat_2019.svg/512px-3sat_2019.svg.png" group-title="General",3sat (720p) [Geo-blocked]
https://zdf-hls-18.akamaized.net/hls/live/2016501/dach/high/master.m3u8
#EXTINF:-1 tvg-id="3StonesTV.ke" tvg-logo="https://i.imgur.com/im3g7T2.png" group-title="General",3 Stones TV (240p) [Not 24/7]
https://goliveafrica.media:9998/live/64d21e682fd26/index.m3u8
#EXTINF:-1 tvg-id="3TamilTV.au" tvg-logo="https://yt3.googleusercontent.com/ytc/AIdro_nZG4BRWT5t0eCtM-SFVh0JMexLekw0evo-J4_S8Bw3YA=s512-c-k-c0x00ffffff-no-rj" group-title="Entertainment",3 Tamil TV (720p) [Not 24/7]
https://6n3yogbnd9ok-hls-live.5centscdn.com/threetamil/d0dbe915091d400bd8ee7f27f0791303.sdp/index.m3u8
#EXTINF:-1 tvg-id="4DmasNoticiasTV.py" tvg-logo="https://i.ibb.co/1fb5BtN/unnamed.png" group-title="News",4DmásNoticias TV (1080p) [Not 24/7]
https://rds3.desdeparaguay.net/4dmasnoticiastv/4dmasnoticiastv/playlist.m3u8
#EXTINF:-1 tvg-id="4E.gr" tvg-logo="https://i.imgur.com/Na0UCV7.png" group-title="Religious",4E (1080p)
http://eu2.tv4e.gr:554/live/smil:myStream.sdp.smil/playlist.m3u8
#EXTINF:-1 tvg-id="4FunDance.pl" tvg-logo="https://i.imgur.com/ZEWHe1B.png" group-title="Music",4 Fun Dance (576p)
http://178.219.128.68:64888/4FUNDANC
#EXTINF:-1 tvg-id="4FunKids.pl" tvg-logo="https://i.imgur.com/2JO5Y8c.png" group-title="Kids",4 Fun Kids (576p)
http://178.219.128.68:64888/4FUNKIDS
#EXTINF:-1 tvg-id="4FunTV.pl" tvg-logo="https://i.imgur.com/rI1wo2l.png" group-title="Undefined",4 Fun TV (576p)
http://178.219.128.68:64888/4FUNTV
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",4K Travel TV
https://streams2.sofast.tv/sofastplayout/33c31ac4-51fa-46ae-afd0-0d1fe5e60a80_0_HLS/master.m3u8
#EXTINF:-1 tvg-id="4UTV.tr" tvg-logo="https://i.imgur.com/PexhKwp.png" group-title="Entertainment",4U TV (720p)
https://hls.4utv.live/hls/stream.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",4UV
http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/65775e07dfed030008cb3f47/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c263251-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=9613835c-f568-4f54-a3c9-71d2371228af
#EXTINF:-1 tvg-id="5AABTV.ca" tvg-logo="https://i.imgur.com/jrGrfof.png" group-title="Entertainment",5AAB TV (720p) [Not 24/7]
http://158.69.124.9:1935/5aabtv/5aabtv/playlist.m3u8
#EXTINF:-1 tvg-id="5Plus.mm" tvg-logo="https://i.imgur.com/4EHL2mH.png" group-title="Entertainment",5 Plus (480p)
https://5a13fe32ef748.streamlock.net/mmplay/5plus/playlist.m3u8
#EXTINF:-1 tvg-id="5tv.ar" tvg-logo="https://i.imgur.com/mSn7ACs.png" group-title="General",5TV Corrientes (480p) [Not 24/7]
http://www.coninfo.net:1935/tvcinco/live1/playlist.m3u8
#EXTINF:-1 tvg-id="Channel5.ru" tvg-logo="https://i.imgur.com/KPXMa3U.png" group-title="General",5 канал
http://s18209.cdn.ngenix.net/hls/CH_R02_5TV/playlist.m3u8
#EXTINF:-1 tvg-id="5TV.am" tvg-logo="https://i.imgur.com/jOGZZDo.png" group-title="Undefined" user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML,like Gecko) Mobile/15E148",5 ԹԻՎԻ (480p) [Not 24/7]
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML,like Gecko) Mobile/15E148
http://ott-cdn.ucom.am/s6/index.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined" user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML,like Gecko) Mobile/15E148",5 ԹԻՎԻ ՊԼՅՈՒՍ (480p) [Not 24/7]
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML,like Gecko) Mobile/15E148
http://ott-cdn.ucom.am/s9/index.m3u8
#EXTINF:-1 tvg-id="6PR.au" tvg-logo="https://i.imgur.com/Q9iCxg1.png" group-title="News",6PR Perth (1080p)
https://6prlive.akamaized.net/hls/live/2033806/6PR/index.m3u8
#EXTINF:-1 tvg-id="78TV.bg" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Seven-Eight-TV.png/512px-Seven-Eight-TV.png" group-title="Entertainment",7/8 TV (1080p)
https://ms4.sedemosmi.tv/live/M3E5ajhtdjJkaXBscmZubmUxMmh1cjN1bjZrbm5wZW8/index.m3u8
#EXTINF:-1 tvg-id="7D7.ee" tvg-logo="https://i.imgur.com/WrQI2EN.png" group-title="General",7D7 (1080p)
https://d7tv.pp.ua/hls/d7tv.m3u8
#EXTINF:-1 tvg-id="7SMusic.in" tvg-logo="https://i.imgur.com/zDiIhdN.png" group-title="Music",7S Music (576p) [Not 24/7]
http://103.199.161.254/Content/7smusic/Live/Channel(7smusic)/index.m3u8
#EXTINF:-1 tvg-id="Canal7TeleValencia.es" tvg-logo="https://i.imgur.com/ILfXDRs.png" group-title="General",7 TeleValencia (576p)
https://play.cdn.enetres.net/9E9557EFCEBB43A89CEC8FBD3C500247022/028/playlist.m3u8
#EXTINF:-1 tvg-id="La7.es" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/La_7_logo.svg/150px-La_7_logo.svg.png" group-title="General",7 Televisión Región de Murcia (1080p)
https://rtv-murcia-live.globalmest.com/principal/smil:principal.smil/playlist.m3u8
#EXTINF:-1 tvg-id="7tv.ru" tvg-logo="https://i.imgur.com/Wuy9Vtn.png" group-title="Entertainment",7 TV
http://v4.proofix.ru/7tv-live/tracks-v1a1/index.m3u8
#EXTINF:-1 tvg-id="8LaMarinaTV.es" tvg-logo="https://i.imgur.com/BTJvvBK.png" group-title="General",8 La Marina TV (576p)
https://streaming005.gestec-video.com/hls/canal24.m3u8
#EXTINF:-1 tvg-id="8NTV.mx" tvg-logo="https://i.imgur.com/7ecgGIG.png" group-title="General",8NTV (1080p)
https://60417ddeaf0d9.streamlock.net/ntv/videontv/playlist.m3u8
#EXTINF:-1 tvg-id="8TV.lv" tvg-logo="https://i.imgur.com/F8P8GY3.png" group-title="General",8TV (1080p)
http://89.254.128.5:22280/8tv_hd/index.m3u8
#EXTINF:-1 tvg-id="Channel8Belarus.by" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/3/33/8channeltv.png" group-title="General",8 канал (Витебск) (576p) [Not 24/7]
http://95.46.208.8:24433/art
#EXTINF:-1 tvg-id="9GemSydney.au" tvg-logo="https://i.imgur.com/cwLzqaw.png" group-title="Entertainment",9Gem (720p) [Geo-blocked]
https://9now-livestreams.akamaized.net/hls/live/2008311/gem-syd/master.m3u8
#EXTINF:-1 tvg-id="9GoSydney.au" tvg-logo="https://i.imgur.com/RLijQI8.png" group-title="Entertainment;Kids",9Go! (720p) [Geo-blocked]
https://9now-livestreams.akamaized.net/hls/live/2008312/go-syd/master.m3u8
#EXTINF:-1 tvg-id="9laLomaTV.es" tvg-logo="https://i.imgur.com/WQP3el2.png" group-title="General",9 la Loma TV (1080p)
https://9laloma.tv/live.m3u8
#EXTINF:-1 tvg-id="9LifeSydney.au" tvg-logo="https://i.imgur.com/HlJOrGI.png" group-title="Lifestyle",9Life (720p) [Geo-blocked]
https://9now-livestreams.akamaized.net/hls/live/2008313/life-syd/master.m3u8
#EXTINF:-1 tvg-id="9RushSydney.au" tvg-logo="https://upload.wikimedia.org/wikipedia/en/c/c2/Logo_of_9RUSH.png" group-title="Series",9Rush (720p) [Geo-blocked]
https://9now-livestreams.akamaized.net/hls/live/2010626/rush-syd/master.m3u8
#EXTINF:-1 tvg-id="9XJalwa.in" tvg-logo="https://i.imgur.com/qubgOi5.png" group-title="Music",9X Jalwa
https://amg01281-9xmediapvtltd-9xjalwa-samsungin-goszf.amagi.tv/playlist/amg01281-9xmediapvtltd-9xjalwa-samsungin/playlist.m3u8
#EXTINF:-1 tvg-id="9XJhakaas.in" tvg-logo="https://i.imgur.com/aZ0f85I.png" group-title="Music",9x Jhakaas
https://amg01281-9xmediapvtltd-9xjhakaas-samsungin-ci2cs.amagi.tv/playlist/amg01281-9xmediapvtltd-9xjhakaas-samsungin/playlist.m3u8
#EXTINF:-1 tvg-id="9XTashan.in" tvg-logo="https://i.imgur.com/MMR1RMF.png" group-title="Music",9X Tashan
https://amg01281-9xmediapvtltd-9xtashan-samsungin-xz1sd.amagi.tv/playlist/amg01281-9xmediapvtltd-9xtashan-samsungin/playlist.m3u8
#EXTINF:-1 tvg-id="9XM.in" tvg-logo="https://i.imgur.com/F17QtN2.png" group-title="Music",9XM (480p)
https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/9XM/9XM.isml/index.m3u8
#EXTINF:-1 tvg-id="9Volna.ru" tvg-logo="https://i.imgur.com/zmnSoBA.png" group-title="Entertainment",9 Волна (Черкесск)
http://cdn-01.bonus-tv.ru/9volna/playlist.m3u8
#EXTINF:-1 tvg-id="10BoldSydney.au" tvg-logo="https://i.imgur.com/2xglh33.png" group-title="Lifestyle;Relax",10 Bold (720p) [Geo-blocked]
https://i.mjh.nz/10bold-nsw.m3u8
#EXTINF:-1 tvg-id="10BoldAdelaide.au" tvg-logo="https://i.imgur.com/2xglh33.png" group-title="Lifestyle;Relax",10 Bold Adelaide (1080p)
https://dce3793146fef017.mediapackage.us-west-2.amazonaws.com/out/v1/55cdf73af7894775ba6de8f57482b66a/CMAF_HLS/index.m3u8
#EXTINF:-1 tvg-id="10Channel.gr" tvg-logo="https://i.ibb.co/0XMM4gn/download-7.png" group-title="Entertainment",10 Channel (720p)
https://tv.mediacp.eu:8081/10channel/index.m3u8
#EXTINF:-1 tvg-id="10PeachSydney.au" tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/10_Peach_logo_2018.svg/512px-10_Peach_logo_2018.svg.png" group-title="General",10 Peach (720p) [Geo-blocked]
https://i.mjh.nz/10peach-nsw.m3u8
#EXTINF:-1 tvg-id="Channel11.ua" tvg-logo="https://i.imgur.com/y78saaG.png" group-title="General" user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0",11 Kanal (720p)
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0
https://11tv-dp.cdn-04.cosmonova.net.ua/hls/11tv-dp_ua_hi/index.m3u8
#EXTINF:-1 tvg-id="12tv.es" tvg-logo="https://i.imgur.com/VSTgXsh.png" group-title="General",12tv
#EXTVLCOPT:http-referrer=https://www.12tv.es/
https://cloud.streamingconnect.tv/hls/12tv/12tv2.m3u8
#EXTINF:-1 tvg-id="12TVParma.it" tvg-logo="https://i.imgur.com/mBYxWOg.png" group-title="General",12 TV Parma (540p) [Not 24/7]
https://5929b138b139d.streamlock.net/12TVParma/livestream/playlist.m3u8
#EXTINF:-1 tvg-id="12VisionEncarnacion.mx" tvg-logo="https://i.imgur.com/yvQJQNF.jpg" group-title="General",12 Visión Encarnación (1080p) [Not 24/7]
https://stream.oursnetworktv.com/latin/encoder87b/playlist.m3u8
#EXTINF:-1 tvg-id="Channel12.ru" tvg-logo="https://i.imgur.com/OA9hm6e.png" group-title="General",12 канал
https://12channel.bonus-tv.ru/cdn/12channel_blackout/playlist.m3u8
#EXTINF:-1 tvg-id="13C.cl" tvg-logo="https://i.ibb.co/3fbvkZ3/13cultura.png" group-title="General",13C (1080p)
https://origin.dpsgo.com/ssai/event/GI-9cp_bT8KcerLpZwkuhw/master.m3u8
#EXTINF:-1 tvg-id="13E.cl" tvg-logo="https://i.imgur.com/utI1tJV.png" group-title="Entertainment",13 Entretención (720p)
https://origin.dpsgo.com/ssai/event/BBp0VeP6QtOOlH8nu3bWTg/master.m3u8
#EXTINF:-1 tvg-id="13Festival.cl" tvg-logo="https://i.imgur.com/hTUe0Pw.png" group-title="Music",13 Festival (1080p)
https://origin.dpsgo.com/ssai/event/Nftd0fM2SXasfDlRphvUsg/master.m3u8
#EXTINF:-1 tvg-id="13Humor.cl" tvg-logo="https://i.imgur.com/KvMuTzN.png" group-title="Comedy",13 Humor (1080p)
https://origin.dpsgo.com/ssai/event/cKWySXKgSK-SzlJmESkOWw/master.m3u8
#EXTINF:-1 tvg-id="13Kids.cl" tvg-logo="https://i.imgur.com/8WJUbSD.png" group-title="Kids",13 Kids (1080p)
https://origin.dpsgo.com/ssai/event/LhHrVtyeQkKZ-Ye_xEU75g/master.m3u8
#EXTINF:-1 tvg-id="13MaxTelevision.ar" tvg-logo="https://i.imgur.com/QvF4l2t.png" group-title="General",13Max Televisión (1080p)
http://coninfo.net:1935/13maxhd/live13maxtvnuevo/playlist.m3u8
#EXTINF:-1 tvg-id="13P.cl" tvg-logo="https://i.imgur.com/R6D228s.png" group-title="Lifestyle",13 Prime (720p)
https://origin.dpsgo.com/ssai/event/p4mmBxEzSmKAxY1GusOHrw/master.m3u8
#EXTINF:-1 tvg-id="13Realities.cl" tvg-logo="https://i.imgur.com/snqCYWP.png" group-title="Entertainment",13 Realities (1080p)
https://origin.dpsgo.com/ssai/event/g7_JOM0ORki9SR5RKHe-Kw/master.m3u8
#EXTINF:-1 tvg-id="13SiamThai.th" tvg-logo="https://i.imgur.com/FvEp1S2.png" group-title="News",13 Siam Thai (1080p)
https://live.x2.co.th/live/13livetv-th.m3u8
#EXTINF:-1 tvg-id="13T.cl" tvg-logo="https://i.imgur.com/Agtfbfi.png" group-title="Series",13 Teleseries (720p)
https://origin.dpsgo.com/ssai/event/f4TrySe8SoiGF8Lu3EIq1g/master.m3u8
#EXTINF:-1 tvg-id="13Ulica.pl" tvg-logo="https://i.imgur.com/0gCNnLq.png" group-title="Entertainment",13 Ulica (1080p)
http://178.219.128.68:64888/13ULICHD
#EXTINF:-1 tvg-id="XHSDDTDT.mx" tvg-logo="https://i.imgur.com/EY0DlT0.png" group-title="Undefined",15tv Sabinas (XHSDD-TDT) (360p)
https://hls.gvstream.live/telesistemas/15tv.stream/playlist.m3u8
#EXTINF:-1 tvg-id="16AnnieIncinta.it" tvg-logo="https://i.imgur.com/Y2pEs8H.png" group-title="Series",16 Anni e Incinta Italy (720p)
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/60940a07d88ba90007b9cb71/master.m3u8?advertisingId={PSID}&appVersion=unknown&deviceDNT={TARGETOPT}&deviceId={PSID}&deviceLat=0&deviceLon=0&deviceMake=samsung&deviceModel=samsung&deviceType=samsung-tvplus&deviceVersion=unknown&embedPartner=samsung-tvplus&profileFloor=&profileLimit=&samsung_app_domain={APP_DOMAIN}&samsung_app_name={APP_NAME}&us_privacy=1YNY
#EXTINF:-1 tvg-id="16tvBudapest.hu" tvg-logo="https://i.imgur.com/04fCzHl.png" group-title="General",16tv Budapest (360p)
https://cloudfront44.lexanetwork.com:1344/freerelay/16tv.sdp/playlist.m3u8
#EXTINF:-1 tvg-id="20.it" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/20_Mediaset_2018.svg/512px-20_Mediaset_2018.svg.png" group-title="Entertainment",20 Mediaset [Geo-blocked]
https://live3-mediaset-it.akamaized.net/Content/hls_h0_clr_vos/live/channel(lb)/index.m3u8
#EXTINF:-1 tvg-id="20MinutesTV.fr" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/20_Minutes_TV_IDF_logo_%282023%29.png/320px-20_Minutes_TV_IDF_logo_%282023%29.png" group-title="General",20 Minutes TV (1080p)
https://lives.digiteka.com/stream/86d3e867-a272-496b-8412-f59aa0104771/index.m3u8
#EXTINF:-1 tvg-id="KERODT1.us" tvg-logo="https://i.imgur.com/CMANZWk.png" group-title="General",23 ABC Bakersfield CA (KERO) (720p)
https://content.uplynk.com/channel/ff809e6d9ec34109abfb333f0d4444b5.m3u8
#EXTINF:-1 tvg-id="247CanaldeNoticias.ar" tvg-logo="https://i.imgur.com/4hDCB1M.png" group-title="News",24/7 Canal de Noticias
#EXTVLCOPT:http-referrer=https://cn247.tv/
https://panel.host-live.com:19360/cn247tv/passthru.m3u8
#EXTINF:-1 tvg-id="24HorasInternacional.es" tvg-logo="https://i.imgur.com/IUVRm5L.png" group-title="News",24 Horas Internacional [Geo-blocked]
https://rtvelivestream.akamaized.net/rtvesec/24h/24h_main_dvr.m3u8
#EXTINF:-1 tvg-id="24HourFreeMovies.us" tvg-logo="https://i.imgur.com/iSVnzR1.png" group-title="Movies",24 Hour Free Movies (720p)
https://d1j2u714xk898n.cloudfront.net/scheduler/scheduleMaster/145.m3u8
#EXTINF:-1 tvg-id="24KZ.kz" tvg-logo="https://24.kz/templates/khabar24/img/logo-new.png" group-title="News",24KZ (720p) [Not 24/7]
http://serv30.vintera.tv:8081/habar/habar24/playlist.m3u8
#EXTINF:-1 tvg-id="24TV.tr" tvg-logo="https://i.imgur.com/8FO41es.png" group-title="News",24 TV
https://kanal
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