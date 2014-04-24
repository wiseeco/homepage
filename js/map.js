$(document).ready(function () {

    var wePosition = new google.maps.LatLng(37.479741, 127.041855);
    var mapCenter = new google.maps.LatLng(37.481597, 127.037989);

    function HomeControl(controlDiv, map) {
        controlDiv.style.padding = '5px';

        // Set CSS for the control border
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = 'yellow';
        controlUI.style.borderStyle = 'solid';
        controlUI.style.borderWidth = '2px';
        controlUI.style.cursor = 'pointer';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'WiseEco로 돌아가기';
        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior
        var controlText = document.createElement('div');
        controlText.style.fontFamily = 'Arial,sans-serif';
        controlText.style.fontSize = '12px';
        controlText.style.paddingLeft = '4px';
        controlText.style.paddingRight = '4px';
        controlText.innerHTML = '<b>Wise<span id="color-red">Eco</span></b>';
        controlUI.appendChild(controlText);

        // Setup the click event listeners: simply set the map to
        // Chicago
        google.maps.event.addDomListener(controlUI, 'click', function() {
            map.setZoom(17)
            map.setCenter(mapCenter)
        });

    }

    function initialize() {
        var mapOptions = {
            zoom: 17,
            center: mapCenter,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            navigationControl: true,
            mapTypeControl: true,
            scrollwheel: true,
            disableDoubleClickZoom: true
        };

        var map = new google.maps.Map(document.getElementById('google_map'), mapOptions);

        //move path...
        var lineCoordinates = [
            new google.maps.LatLng(37.483032, 127.035847),
            new google.maps.LatLng(37.481626, 127.037304),
            new google.maps.LatLng(37.480901, 127.037816),
            new google.maps.LatLng(37.480950, 127.038039),
            new google.maps.LatLng(37.479370, 127.039726),
            new google.maps.LatLng(37.480177, 127.040488),
            new google.maps.LatLng(37.479860, 127.041042),
            new google.maps.LatLng(37.479984, 127.041157),
            new google.maps.LatLng(37.479702, 127.041642),
            new google.maps.LatLng(37.479805, 127.041740),
            wePosition
        ];

        var comeToWiseecoPath = [
            new google.maps.LatLng(37.48247706,127.0359559),
            new google.maps.LatLng(37.48249434,127.0360653),
            new google.maps.LatLng(37.48249232,127.0361427),
            new google.maps.LatLng(37.48247668,127.0362064),
            new google.maps.LatLng(37.48245329,127.0362572),
            new google.maps.LatLng(37.48241264,127.0363),
            new google.maps.LatLng(37.48237604,127.0363471),
            new google.maps.LatLng(37.48233294,127.0363848),
            new google.maps.LatLng(37.48230804,127.0364397),
            new google.maps.LatLng(37.48226184,127.0364553),
            new google.maps.LatLng(37.48220473,127.036447),
            new google.maps.LatLng(37.48215842,127.0364684),
            new google.maps.LatLng(37.48210773,127.0364887),
            new google.maps.LatLng(37.48205869,127.0365051),
            new google.maps.LatLng(37.48200986,127.0365208),
            new google.maps.LatLng(37.48196841,127.0365484),
            new google.maps.LatLng(37.48193476,127.036604),
            new google.maps.LatLng(37.48191443,127.0366559),
            new google.maps.LatLng(37.48186392,127.0366678),
            new google.maps.LatLng(37.481809,127.0366763),
            new google.maps.LatLng(37.48175638,127.0367009),
            new google.maps.LatLng(37.48171702,127.0367553),
            new google.maps.LatLng(37.48171733,127.0368305),
            new google.maps.LatLng(37.48171312,127.0368975),
            new google.maps.LatLng(37.48170173,127.0369537),
            new google.maps.LatLng(37.48168589,127.0370069),
            new google.maps.LatLng(37.48166634,127.037086),
            new google.maps.LatLng(37.4816448,127.0371491),
            new google.maps.LatLng(37.48161528,127.0371974),
            new google.maps.LatLng(37.48159266,127.0372565),
            new google.maps.LatLng(37.48156896,127.037302),
            new google.maps.LatLng(37.48152678,127.0373219),
            new google.maps.LatLng(37.48147444,127.0373491),
            new google.maps.LatLng(37.48143387,127.0373905),
            new google.maps.LatLng(37.48139763,127.0374254),
            new google.maps.LatLng(37.4813462,127.0374633),
            new google.maps.LatLng(37.48131251,127.0375054),
            new google.maps.LatLng(37.48127133,127.0375341),
            new google.maps.LatLng(37.4812297,127.0375793),
            new google.maps.LatLng(37.48120346,127.0376267),
            new google.maps.LatLng(37.48115807,127.0376777),
            new google.maps.LatLng(37.48110312,127.0377195),
            new google.maps.LatLng(37.48106027,127.0377712),
            new google.maps.LatLng(37.481028,127.0378371),
            new google.maps.LatLng(37.48098759,127.0378904),
            new google.maps.LatLng(37.48095233,127.0379535),
            new google.maps.LatLng(37.48091783,127.0380039),
            new google.maps.LatLng(37.48088669,127.038056),
            new google.maps.LatLng(37.48085535,127.0381097),
            new google.maps.LatLng(37.48083023,127.0381597),
            new google.maps.LatLng(37.4807921,127.0382066),
            new google.maps.LatLng(37.48076135,127.0382494),
            new google.maps.LatLng(37.48073502,127.0383001),
            new google.maps.LatLng(37.48071851,127.0383603),
            new google.maps.LatLng(37.48067594,127.0384015),
            new google.maps.LatLng(37.48063243,127.0384466),
            new google.maps.LatLng(37.4805933,127.038482),
            new google.maps.LatLng(37.48055628,127.038518),
            new google.maps.LatLng(37.48054043,127.0385676),
            new google.maps.LatLng(37.48049838,127.0386157),
            new google.maps.LatLng(37.48047572,127.0386604),
            new google.maps.LatLng(37.48042588,127.038696),
            new google.maps.LatLng(37.48037228,127.0387314),
            new google.maps.LatLng(37.48033044,127.0387688),
            new google.maps.LatLng(37.48028467,127.0387965),
            new google.maps.LatLng(37.48022624,127.0388299),
            new google.maps.LatLng(37.48016021,127.0388309),
            new google.maps.LatLng(37.48010467,127.03882),
            new google.maps.LatLng(37.48007144,127.0388673),
            new google.maps.LatLng(37.48004734,127.0389324),
            new google.maps.LatLng(37.48001459,127.0389754),
            new google.maps.LatLng(37.47996445,127.0390192),
            new google.maps.LatLng(37.47991578,127.0390601),
            new google.maps.LatLng(37.47986916,127.0391109),
            new google.maps.LatLng(37.47981797,127.0391607),
            new google.maps.LatLng(37.47977051,127.0392152),
            new google.maps.LatLng(37.47973038,127.0392473),
            new google.maps.LatLng(37.47968668,127.0392605),
            new google.maps.LatLng(37.47963425,127.0392792),
            new google.maps.LatLng(37.47958703,127.0393036),
            new google.maps.LatLng(37.47954207,127.0392875),
            new google.maps.LatLng(37.47949173,127.0392682),
            new google.maps.LatLng(37.47944645,127.0392938),
            new google.maps.LatLng(37.47944743,127.0393572),
            new google.maps.LatLng(37.47945836,127.039413),
            new google.maps.LatLng(37.47947345,127.0394817),
            new google.maps.LatLng(37.4795064,127.0395686),
            new google.maps.LatLng(37.47954006,127.0396469),
            new google.maps.LatLng(37.47957128,127.039697),
            new google.maps.LatLng(37.47960409,127.0397512),
            new google.maps.LatLng(37.47963908,127.0398048),
            new google.maps.LatLng(37.47968353,127.0398441),
            new google.maps.LatLng(37.47970017,127.039901),
            new google.maps.LatLng(37.47973938,127.0399416),
            new google.maps.LatLng(37.47977687,127.0399785),
            new google.maps.LatLng(37.47981121,127.0400219),
            new google.maps.LatLng(37.47982994,127.0400777),
            new google.maps.LatLng(37.4798505,127.0401325),
            new google.maps.LatLng(37.47986507,127.0402005),
            new google.maps.LatLng(37.47989548,127.0402469),
            new google.maps.LatLng(37.47993676,127.0402806),
            new google.maps.LatLng(37.47997818,127.0403069),
            new google.maps.LatLng(37.48000397,127.040364),
            new google.maps.LatLng(37.48003083,127.0404087),
            new google.maps.LatLng(37.48007169,127.0404458),
            new google.maps.LatLng(37.48012574,127.0404712),
            new google.maps.LatLng(37.4801623,127.0405046),
            new google.maps.LatLng(37.48018854,127.0405623),
            new google.maps.LatLng(37.48015544,127.0406145),
            new google.maps.LatLng(37.48012145,127.0406684),
            new google.maps.LatLng(37.48007019,127.0407217),
            new google.maps.LatLng(37.48003009,127.0407626),
            new google.maps.LatLng(37.47999613,127.0408078),
            new google.maps.LatLng(37.47996971,127.0408693),
            new google.maps.LatLng(37.47995423,127.0409269),
            new google.maps.LatLng(37.47998531,127.0409836),
            new google.maps.LatLng(37.479975,127.041096),
            new google.maps.LatLng(37.4799595,127.0411611),
            new google.maps.LatLng(37.47994969,127.0412246),
            new google.maps.LatLng(37.47992938,127.0412907),
            new google.maps.LatLng(37.47990777,127.0413412),
            new google.maps.LatLng(37.47988328,127.0414015),
            new google.maps.LatLng(37.47985235,127.0414547),
            new google.maps.LatLng(37.4798226,127.0415049),
            new google.maps.LatLng(37.47979417,127.0415574),
            new google.maps.LatLng(37.479795,127.0416177),
            new google.maps.LatLng(37.47983584,127.0416536),
            wePosition
        ];

        //wiseeco position marker
        var weMarker = new google.maps.Marker({
            position: wePosition,
            map: map,
            icon: 'images/wiseeco/marker.png',
            animation: google.maps.Animation.BOUNCE,
            content: "hihi"
        });

        // add listener for a click on the pin
        google.maps.event.addListener(weMarker, 'click', function() {
            infowindow.open(map, weMarker);
        });


        // add information window
        var infowindow = new google.maps.InfoWindow({
            content:  '<div id="content"><strong>Wise<span id ="color-red">Eco</span></strong><br>서울시 서초구 양재동 88-11 <br>천일빌딩 302호</div>'
        });

//        weMarker.setAnimation(google.maps.Animation.BOUNCE);


//        var goldStar = {
//            path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
//            icon: 'images/wiseeco/marker.png',
//            fillColor: 'yellow',
//            fillOpacity: 0.8,
//            scale: 1,
//            strokeColor: 'gold',
//            strokeWeight: 14
//        };
//
//        var marker = new google.maps.Marker({
//            position: map.getCenter(),
//            icon: goldStar,
//            map: map
//        });


        var lineSymbol = {
            path: 'M 0,-1 0,1',
            strokeOpacity: 1,
            scale: 4
        };


        //animate...symbol
        var symbol1 = {
            path: 'M -2,0 0,-2 2,0 0,2 z',
            strokeColor: '#F00',
            fillColor: '#F00',
            fillOpacity: 1
        };

        var symbol2 = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            strokeColor: '#F00'
//            strokeColor: '#393'
        };

        var symbol3 = {
            path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
            fillColor: 'yellow',
            fillOpacity: 0.8,
            scale: 1,
            strokeColor: 'gold',
            strokeWeight: 14
        };

        var symbol4= {
//            path: 'M 100 200 L 200 100 L -100 -200',
            path: 'M -1,0 A 1,1 0 0 0 -3,0 1,1 0 0 0 -1,0M 1,0 A 1,1 0 0 0 3,0 1,1 0 0 0 1,0M -3,3 Q 0,5 3,3',
//            path: 'M50,50 A30,30 0 0,1 35,20 L100,100 M110,110 L100,0',
            strokeColor: '#00F',
            rotation: 45
        };

        var symbol5 = {
            path: 'M -2,-2 2,2 M 2,-2 -2,2',
            strokeColor: '#292',
            strokeWeight: 4
        };

        var symbol6 = {
            path: 'M10,50 q60,50 100,0 q60,-50 100,0',
            strokeColor: '#292',
            strokeWeight: 4
        };

        // Create the polyline and add the symbol to it via the 'icons' property.
        line = new google.maps.Polyline({
            path: lineCoordinates,
            icons: [{
                icon: symbol1,
                offset: '100%'
            }],
            strokeColor: 'gold',
            strokeWeight: 5,
            map: map
        });

        animateCircle();
        infowindow.open(map, weMarker);

        var homeControlDiv = document.createElement('div');
        var homeControl = new HomeControl(homeControlDiv, map);

        homeControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);

    }

// Use the DOM setInterval() function to change the offset of the symbol
// at fixed intervals.
    function animateCircle() {
        var count = 0;
        window.setInterval(function() {
            count = (count + 1) % 200;

            var icons = line.get('icons');
            icons[0].offset = (count / 2) + '%';
            line.set('icons', icons);
        }, 40);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
});