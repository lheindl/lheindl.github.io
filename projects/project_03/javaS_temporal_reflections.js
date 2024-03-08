document.addEventListener('DOMContentLoaded', function() {

    const container = document.querySelector('.container');
    

    const words = [];


    function getRandomPosition() {
        const columns = container.offsetWidth / 120; 
        const rows = container.offsetHeight / 50; 
        return {
            column: Math.floor(Math.random() * columns) + 1,
            row: Math.floor(Math.random() * rows) + 1
        };
    }

    function addWord(wordText, isStatic) {
        const word = document.createElement('div');
        word.classList.add('word');
        if (isStatic) {
            word.classList.add('static-word');
        } else {
            word.addEventListener('click', function() {
                if (!word.classList.contains('clicked')) {
                    word.classList.add('clicked');
                    setTimeout(() => {
                        word.classList.remove('clicked');
                    }, 50000); // 50 SECONDS!!
                }
            });
        }
        word.textContent = wordText;
        const position = getRandomPosition();
        word.style.gridColumn = position.column;
        word.style.gridRow = position.row;
        container.appendChild(word);
        words.push(word);
    }

    // BEGINNING AND END OF THINGI
    addWord('on', true); // FIRST WORD
    addWord('earth', true); // LAST WORD

    
    const wordList = [
        'giant', 'ferns', 'and', 'wild', 'pinks', 'beneath', 'the', 'chestnuts', 'wind', 'loosening', 'each',
        'red', 'and', 'blonde', 'knot', 'on', 'the', 'sun’s', 'leafy', 'gown', 'the', 'sun', 'ablaze', 'in',
        'it', 'his', 'white', 'beauty', 'like', 'a', 'fragile', 'nude', 'midnight', 'wind', 'a', 'gust', 'of',
        'stars', 'smashed', 'the', 'windows', 'till', 'dawn', 'mist-silvered', 'sail', 'boats', 'in', 'shadowy',
        'lakes', 'traversed', 'the', 'fields', 'then', 'slowly', 'light', 'lays', 'the', 'mountain’s', 'crown',
        'on', 'the', 'sky’s', 'brow', 'sun-found', 'bright', 'with', 'fresh', 'snow-harmonious', 'like', 'an',
        'arch', 'of', 'flowers', 'it', 'rained', 'all', 'night', 'on', 'summer’s', 'memories', 'in', 'the',
        'dark', 'we', 'left', 'inside', 'a', 'mournful', 'thundering', 'of', 'stones', 'standing', 'on', 'the',
        'bank', 'we', 'lifted', 'torches', 'to', 'explore', 'bridges', 'their', 'danger', 'pale', 'at', 'dawn',
        'we', 'saw', 'swallows', 'on', 'the', 'lines', 'soaked', 'still', 'spying', 'secret', 'farewell', 'nods',
        'and', 'ground-level', 'mirrored', 'in', 'streams', 'their', 'faces', 'ravaged', 'If', 'words', 'might',
        'know', 'snow', 'tonight', 'what', 'songs', 'and', 'stars', 'I', 'couldn’t', 'ever', 'utter', 'motionless',
        'faces', 'mesh', 'amongst', 'the', 'branches', 'in', 'my', 'blue', 'black', 'dead', 'in', 'the', 'lights',
        'of', 'distant', 'houses', 'they', 'still', 'dare', 'the', 'undying', 'smile', 'of', 'my', 'years', 'on',
        'the', 'shore', 'of', 'the', 'blue', 'lake', 'of', 'living', 'white', 'clouds', 'are', 'bodies', 'the',
        'sun’s', 'fleshy', 'sons', 'already', 'a', 'shadow', 'has', 'lain', 'right', 'over', 'your', 'shoulder',
        'a', 'chain', 'of', 'submersed', 'mountains', 'chez-nous', 'fresh', 'rose', 'petals', 'deck', 'the', 'table',
        'the', 'woods', 'are', 'intact', 'green', 'with', 'chestnut', 'trees', 'their', 'leaves', 'stirred', 'in',
        'the', 'wind', 'do', 'you', 'hear', 'the', 'birds', 'arrive', 'they’re', 'not', 'afraid', 'of', 'our',
        'faces', 'our', 'clothes', 'like', 'pulpy', 'fruit', 'we’re', 'birthed', 'from', 'moist'
    ];
    wordList.forEach(word => {
        addWord(word, false);
    });
});