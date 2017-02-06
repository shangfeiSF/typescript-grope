// 字典模式（dictionary）

// 确保所有属性与任意属性的返回值类型相匹配
interface Dictionary {
    readonly [propName: string]: string;
    word: string;
    explain: string;
    pronunciation: string;
    charCounts: string;
    short?: string;
}

let hello: Dictionary = {
    index: 'P10',
    word: 'hello',
    explain: 'This is a greeting word.',
    pronunciation: "[hə'ləʊ]",
    charCounts: '5',
    short: 'hi'
}

hello['index'] = 'P11'  // error code
hello['explain'] = 'This word can be used when greeting to others.'