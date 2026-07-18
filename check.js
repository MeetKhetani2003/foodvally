const urls = [
'https://images.pexels.com/photos/19986452/pexels-photo-19986452.jpeg',
'https://images.pexels.com/photos/17001844/pexels-photo-17001844.jpeg',
'https://images.pexels.com/photos/37828118/pexels-photo-37828118.jpeg',
'https://images.pexels.com/photos/36430149/pexels-photo-36430149.jpeg',
'https://images.pexels.com/photos/35420072/pexels-photo-35420072.jpeg',
'https://images.pexels.com/photos/29486069/pexels-photo-29486069.jpeg',
'https://images.pexels.com/photos/32149261/pexels-photo-32149261.jpeg',
'https://images.pexels.com/photos/4717550/pexels-photo-4717550.jpeg',
'https://images.pexels.com/photos/29098355/pexels-photo-29098355.jpeg',
'https://images.pexels.com/photos/35985243/pexels-photo-35985243.jpeg',
'https://images.pexels.com/photos/8629103/pexels-photo-8629103.jpeg',
'https://images.pexels.com/photos/30469689/pexels-photo-30469689.jpeg',
'https://images.pexels.com/photos/35985229/pexels-photo-35985229.jpeg',
'https://images.pexels.com/photos/34672241/pexels-photo-34672241.jpeg',
'https://images.pexels.com/photos/4590941/pexels-photo-4590941.jpeg',
'https://images.pexels.com/photos/8629120/pexels-photo-8629120.jpeg',
'https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg',
'https://images.pexels.com/photos/8629107/pexels-photo-8629107.jpeg',
'https://images.pexels.com/photos/34342527/pexels-photo-34342527.jpeg',
'https://images.pexels.com/photos/17001762/pexels-photo-17001762.jpeg',
'https://images.pexels.com/photos/17001849/pexels-photo-17001849.jpeg',
'https://images.pexels.com/photos/36766881/pexels-photo-36766881.jpeg',
'https://images.pexels.com/photos/36766850/pexels-photo-36766850.jpeg',
'https://images.pexels.com/photos/16935916/pexels-photo-16935916.jpeg',
'https://images.pexels.com/photos/14646769/pexels-photo-14646769.jpeg',
'https://images.pexels.com/photos/14703685/pexels-photo-14703685.jpeg',
'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
'https://images.pexels.com/photos/33033776/pexels-photo-33033776.jpeg',
'https://images.pexels.com/photos/17001793/pexels-photo-17001793.jpeg',
'https://images.pexels.com/photos/37116449/pexels-photo-37116449.jpeg',
'https://images.pexels.com/photos/19748941/pexels-photo-19748941.jpeg',
'https://images.pexels.com/photos/29486071/pexels-photo-29486071.jpeg'
];
(async () => {
    for (const url of urls) {
        try {
            const res = await fetch(url.split('?')[0]);
            const text = await res.text();
            const match = text.match(/<title>([^<]+)<\/title>/);
            console.log(url.split('/').pop().split('.')[0] + ': ' + (match ? match[1] : 'No title'));
        } catch (e) {
            console.log(url.split('/').pop() + ': Error');
        }
    }
})();
