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
    use3dTerrain: false, //set true for enabling 3D maps.
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
            description: 'TK New York State moves X Gallons of natural gas a year',
            location: {
                center: [-74.2179, 42.1994],
                zoom: 7.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ny-pipelines-all',
                    opacity: .5,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'ny-pipelines-all',
                    opacity: .25,
                    duration: 1000
                }
            ]
        },
        {
            id: 'ny-iriquois',
            alignment: 'left',
            hidden: false,
            //title: 'New York States',
            //image: './assets/san-fran.jpeg',
            description: 'But the gas system has continued to grow. A major project by the Iroquois Pipeline Company to bring more gas into New York City that could generate $3.78 billion in climate damages over the next five years was approved on February 7th. ',
            location: {
                center: [-74.2179, 42.1994],
                zoom: 7.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ny-pipelines-iriquois',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'ny-pipelines-all',
                    opacity: 0,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'ny-pipelines-iriquois',
                    opacity: 0,
                    duration: 5000
                },
            ]
        },
        {
            id: 'ny-pipelines',
            alignment: 'left',
            hidden: false,
            //title: 'New York States',
            //image: './assets/san-fran.jpeg',
            description: 'This is one of at least 10 proposals to pump more gas into the Empire State that have been introduced since 2019, public filings uncovered by City Limits show. ',
            location: {
                center: [-74.2179, 42.1994],
                zoom: 7.5,
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
                    duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
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
                center: [-73.8145073969854, 42.26252101379557],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ny-athens-map',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
    ]
};
