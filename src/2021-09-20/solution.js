export function parseHtml(str){
    var result = [];
    for (let i = 0; i < str.length; i++) {
        if(str[i] === '<'){
            let token = { tag : ''}
            for (let j = i; j < str.length; j++) {
                if (str[j] === '!'){
                    //ignore comments
                }
            }
        }
    }
    return 'NotImplemented'
}