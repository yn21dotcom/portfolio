const ITEM_LIST = [
    {item_no:0, src: '0', title: 'Daffodils', size: `20" x 20"`, medium: "Oil on linen", status: '', price: '$3500', find: ''},
    {item_no:1, src: '1', title: 'Red Pepper, Grapes and Honey', size: `20" x 20"`, medium: "Oil on linen", status: '', price: '$3500', find: ''},
    {item_no:2, src: '2', title: 'Early Summer East Light', size: `20" x 20"`, medium: "Oil on linen", status: 'Sold', price: '$3500', find: ''},
    {item_no:3, src: '3', title: 'Yellow Plums and Gingergold', size: `20" x 20"`, medium: "Oil on linen", status: '', price: '$3500', find: ''},
    {item_no:4, src: '4', title: 'Green Glass, Blue Bowl and Lemons', size: `20" x 20"`, medium: "Oil on linen", status: 'Sold', price: '$3500', find: 'Edgewater Gallery'},
    {item_no:5, src: '5', title: 'White Still Life with Blue', size: `20" x 20"`, medium: "Oil on linen", status: '', price: '$3500', find: 'Edgewater Gallery'},
    {item_no:6, src: '6', title: 'Early Summer Overcast Morning', size: `20" x 20"`, medium: "Oil on linen", status: '', price: '$3500', find: 'Edgewater Gallery'},
    {item_no:7, src: '7', title: 'Violet Bowl, Grapes and Honey', size: `20" x 20"`, medium: "Oil on linen", status: '', price: '$3500', find: 'Edgewater Gallery'},
    {item_no:8, src: '8', title: 'Yellow and Red: Late Afternoon July Light', size: `20" x 20"`, medium: "Oil on linen", status: '', price: '$3500', find: 'George Billis Gallery'},
    {item_no:9, src: '9', title: 'Violet & Orange Reflections', size: `16" x 16"`, medium: "Oil on canvas", status: 'Sold', price: '$3200', find: 'George Billis Gallery'},
    {item_no:10, src: '10', title: 'Kitchen Still Life Series #18 Black Grapes', size: `20" x 20"`, medium: "Oil on linen", status: '', price: '$3500', find: 'George Billis Gallery'},
    {item_no:11, src: '11', title: 'August Light / Apricots', size: `20" x 20"`, medium: "Oil on linen", status: '', price: '$3500', find: 'George Billis Gallery'},
    {item_no:12, src: '12', title: 'Kitchen Still Life Series #15 Violet Glass', size: `20" x 20"`, medium: "Oil on linen", status: 'Sold', price: '$3500', find: 'Edgewater Gallery'},
    {item_no:13, src: '13', title: 'Blue/Green #3', size: `20" x 20"`, medium: "Oil on linen", status: '', price: '$3500', find: 'Edgewater Gallery'},
    {item_no:14, src: '14', title: 'Kitchen Still Life Series #16 Glass and Green', size: `20" x 20"`, medium: "Oil on linen", status: '', price: '$3500', find: 'Edgewater Gallery'},
    {item_no:15, src: '15', title: 'Coffee Pot & Orange', size: `20" x 20"`, medium: "Oil on linen", status: 'Sold', price: '$3500', find: 'Edgewater Gallery'},
    {item_no:16, src: '16', title: 'Early Spring Series/Blue Glass', size: `20" x 20"`, medium: "Oil on linen", status: '', price: '$3500', find: ''},
    {item_no:17, src: '17', title: 'Reflections of All Sorts', size: `20" x 20"`, medium: "Oil on linen", status: '', price: '$3500', find: 'Edgewater Gallery'},
    {item_no:18, src: '18', title: 'Blue Tulip Pitcher', size: `30" x 30"`, medium: "Oil on linen", status: '', price: '$3700', find: ''},
    {item_no:19, src: '19', title: 'April Blue/Green', size: `24" x 24"`, medium: "Oil on linen", status: 'Sold', price: '$3500', find: 'Edgewater Gallery'},
    {item_no:20, src: '20', title: 'Cherries on Blue Plate', size: `30" x 30"`, medium: "Oil on canvas", status: '', price: '$3700', find: ''},
    {item_no:21, src: '21', title: 'White Roses', size: `36" x 30"`, medium: "Oil on cavas", status: '', price: '$3700', find: 'Memorial Sloan Kettering'},
    {item_no:22, src: '22', title: 'Eggplant & Tomato', size: `10" x 10"`, medium: "Oil on linen", status: '', price: '$700', find: 'George Billis Gallery'},
    {item_no:23, src: '23', title: 'Tomato', size: `6" x 6"`, medium: "Oil on linen", status: 'Sold', price: '$700', find: 'Edgewater Gallery'},
    {item_no:24, src: '24', title: 'Glass Mug Series #1', size: `6" x 6"`, medium: "Oil on linen", status: 'Sold', price: '$700', find: 'Edgewater Gallery'},
    {item_no:25, src: '25', title: 'Eggplant & Tomato', size: `10" x 10"`, medium: "Oil on linen", status: '', price: '$700', find: ''},
    {item_no:26, src: '26', title: 'Rose Series #7 Feb. 14', size: `10" x 10"`, medium: "Oil on linen", status: '', price: '$700', find: ''},
    {item_no:27, src: '27', title: 'Cherries in Blue Bowl', size: `10" x 10"`, medium: "Oil on linen", status: 'Sold', price: '$700', find: ''},
    {item_no:28, src: '28', title: 'Indigo Plum', size: `6" x 6"`, medium: "Oil on linen", status: 'Sold', price: '$700', find: 'Edgewater Gallery'},
    {item_no:29, src: '29', title: 'White Cups & Saucer series #3', size: `10" x 10"`, medium: "Oil on linen", status: '', price: '$700', find: ''},
    {item_no:30, src: '30', title: 'Blue Glass Palette Knife Painting', size: `10" x 8"`, medium: "Oil on linen", status: '', price: '$700', find: ''},
    {item_no:31, src: '31', title: 'Wednesday Lemon', size: `10" x 10"`, medium: "Oil on linen", status: '', price: '$700', find: ''},
    {item_no:32, src: '32', title: 'Yellow Apple #16', size: `12" x 12"`, medium: "Oil on linen", status: '', price: '$700', find: ''},
    {item_no:33, src: '33', title: 'Peach Tea', size: `6" x 6"`, medium: "Oil on linen", status: '', price: '$700', find: 'Edgewater Gallery'},
    {item_no:34, src: '34', title: 'Glass with Green Tint II', size: `10" x 8"`, medium: "Oil on linen", status: '', price: '$700', find: ''},
    {item_no:35, src: '35', title: 'Green Apple with Blue II', size: `10" x 8"`, medium: "Oil on linen", status: '', price: '$700', find: ''},
    {item_no:36, src: '36', title: 'White Still Life', size: `10" x 10"`, medium: "Oil on linen", status: 'Sold', price: '$700', find: ''},
    {item_no:37, src: '37', title: 'Glass with Blue Tint II', size: `10" x 8"`, medium: "Oil on linen", status: 'Sold', price: '$700', find: ''},
    {item_no:38, src: '38', title: 'Clear Glass II', size: `10" x 10"`, medium: "Oil on linen", status: 'Sold', price: '$700', find: ''},
    {item_no:39, src: '39', title: 'Cherries, Orange & Glass Plate', size: `10" x 10"`, medium: "Oil on linen", status: 'Sold', price: '$700', find: ''},
    {item_no:40, src: '40', title: 'Glass & Fruit II', size: `10" x 10"`, medium: "Oil on linen", status: 'Sold', price: '$700', find: ''},
    {item_no:41, src: '41', title: 'May Rose', size: `8" x 8"`, medium: "Oil on linen", status: '', price: '$700', find: ''},
    {item_no:42, src: '42', title: 'July', size: `12" x 12"`, medium: "Oil on linen", status: 'Sold', price: '$700', find: 'Edgewater Gallery'},
    {item_no:43, src: '43', title: 'August Late Afternoon Light', size: `16" x 16"`, medium: "Oil on canvas", status: '', price: '$3200', find: 'Edgewater Gallery'},
    {item_no:44, src: '44', title: 'Green Glass and Lemon', size: `12" x 12"`, medium: "Oil on linen", status: 'Sold', price: '$700', find: 'Edgewater Gallery'},
    {item_no:45, src: '45', title: 'Blue Glass & Eggplant', size: `16" x 16"`, medium: "Oil on canvas", status: '', price: '$3200', find: 'Edgewater Gallery'},
    {item_no:46, src: '46', title: 'Lemons and Glass Vase', size: `16" x 16"`, medium: "Oil on canvas", status: '', price: '$3200', find: ''},
    {item_no:47, src: '47', title: 'Green/Blue Apple #3', size: `10" x 10"`, medium: "Oil on linen", status: 'Sold', price: '$700', find: 'Edgewater Gallery'},
    {item_no:48, src: '48', title: 'June Peaches', size: `16" x 16"`, medium: "Oil on canvas", status: 'Sold', price: '$3200', find: ''},
    {item_no:49, src: '49', title: 'Clear Glass/Grays', size: `12" x 12"`, medium: "Oil on linen", status: '', price: '$700', find: ''},
    {item_no:50, src: '50', title: 'Red Pepper #3', size: `10" x 8"`, medium: "Oil on linen", status: '', price: '$700', find: ''},
    {item_no:51, src: '51', title: 'Dark Red Apple', size: `10" x 10"`, medium: "Oil on linen", status: 'Sold', price: '$700', find: ''},
    {item_no:52, src: '52', title: 'Yellow Apple', size: `6" x 6"`, medium: "Oil on linen", status: 'Sold', price: '$700', find: ''},
    {item_no:53, src: '53', title: 'Red Pepper #2', size: `13" x 8.5"`, medium: "Oil on primed acid-free 90lb. paper", status: '', price: '$750', find: ''},
    {item_no:54, src: '54', title: 'Cherries & Cranberry Glass', size: `10" x 10"`, medium: "Oil on linen", status: '', price: '$700', find: ''},
    {item_no:55, src: '55', title: 'Blue Glass II', size: `10" x 10"`, medium: "Oil on linen", status: '', price: '$700', find: ''},
    {item_no:56, src: '56', title: 'White Still Life', size: `14" x 14"`, medium: "Oil on canvas", status: 'Sold', price: '$1000', find: ''},
    {item_no:57, src: '57', title: 'May', size: `16" x 20"`, medium: "Oil on canvas", status: '', price: '$3200', find: ''},
    {item_no:58, src: '58', title: 'Cherry Red Hot Pepper', size: `6" x 6"`, medium: "Oil on linen", status: 'Sold', price: '$700', find: ''},
    {item_no:59, src: '59', title: 'Cherry Red Hot Pepper/Blue Glass', size: `10" x 10"`, medium: "Oil on linen", status: '', price: '$700', find: ''},
    {item_no:60, src: '60', title: 'Pink Parfait Glass', size: `14" x 11"`, medium: "Oil on canvas", status: 'Sold', price: '$750', find: ''},
    {item_no:61, src: '61', title: 'Black Still Life with Red', size: `20" x 20"`, medium: "Oil on linen", status: '', price: '$3500', find: 'Edgewater Gallery'},
    {item_no:62, src: '62', title: 'Daffodils in Glass Vase', size: `20" x 20"`, medium: "Oil on linen", status: '', price: '$3500', find: 'Edgewater Gallery'},
    {item_no:63, src: '63', title: 'Early Spring Daffodils', size: `20" x 20"`, medium: "Oil on linen", status: '', price: '$3500', find: ''}
]