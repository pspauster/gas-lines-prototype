var config = {
    style: 'mapbox://styles/mapbox/dark-v11',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoicHNwYXVzdGVyIiwiYSI6ImNtNzEzNWVuMDA4bXoycnE3dTR5MjNncnMifQ.eaNWOML8R7HzgViimF03Qg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'red'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'HEADLINE GOES HERE',
    subtitle: 'Subtitle is a little more verbose than the headline.',
    byline: 'By Mariana Simoes\nDeveloped by Patrick Spauster',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'ny-base',
            alignment: 'left',
            hidden: false,
            //title: 'New York States',
            //image: './assets/san-fran.jpeg',
            description: 'TK                     TK',
            location: {
                center: [-74.2179, 42.1994],
                zoom: 6.75,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ny-pipelines-all',
                    opacity: 1,
                },
                {
                    layer: 'ny-pipelines-proposed',
                    opacity: 0,
                },
                {
                    layer: 'ny-pipelines-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-points-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-proposed-points',
                    opacity: 0,
                }
            ],
            onChapterExit: [
                {
                    layer: 'ny-pipelines-all',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'ny-iroquois',
            alignment: 'left',
            hidden: false,
            //title: 'New York States',
            //image: './assets/san-fran.jpeg',
            description: 'But the gas system has continued to grow. A major project by the Iroquois Pipeline Company to bring more gas into New York City that could generate $3.78 billion in climate damages over the next five years was approved on February 7th. ',
            location: {
                center: [-74.0179, 41.7994],
                zoom: 7.25,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ny-pipelines-iroquois',
                    opacity: 1,
                },
                {
                    layer: 'ny-points-iroquois',
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: 'ny-pipelines-iroquois',
                    opacity: 0,
                },
                {
                    layer: 'ny-points-iroquois',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'ny-proposed',
            alignment: 'left',
            hidden: false,
            //title: 'New York States',
            //image: './assets/san-fran.jpeg',
            description: 'This is one of at least 10 proposals to pump more gas into the Empire State that have been introduced since 2019, public filings uncovered by City Limits show. ',
            location: {
                center: [-74.2179, 41.1994],
                zoom: 7.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ny-pipelines-proposed',
                    opacity: 1,
                }  ,
                {
                    layer: 'ny-proposed-points',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'ny-pipelines-proposed',
                    opacity: 1,
                },
            ]
        },
        {
            id: 'ny-athens',
            alignment: 'left',
            hidden: false,
            //title: 'New York States',
            //image: './assets/san-fran.jpeg',
            description: 'Now Iroquois’ newly approved project is set to spew pollution into communities like Athens, a town in southeast central New York that filmmaker Lisa Thomas, calls home.',
            location: {
                center: [-73.82829221631468, 42.27286231008302],
                zoom: 12,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ny-pipelines-proposed',
                    opacity: 1,
                } 
            ],
            onChapterExit: [
            ]
        },
    ]
};
