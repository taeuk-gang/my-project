module.exports = {
    "root": true,

    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },

    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": `module`
    },

    "extends": `eslint:recommended`,

    "rules": {        
        // 반복문에 await을 사용하지마라, 성능 저하 큼, 마지막에 await Promise.all 처리 권장
        "no-await-in-loop": 1,
        // console문은 디버깅 이후 제거할 것
        "no-console": [1, { allow: ["warn", "error","info"] }],        
        // 빈줄 없애기
        "no-empty": 1,
        // 빈 클래스 없애기
        "no-empty-character-class": 1,

        // 불필요한 세미콜론 불가
        "no-extra-semi": 1,
        // 함수 재선언 불가
        "no-func-assign": 2,        
        // return 이후 코드 불가
        "no-unreachable": 2,        

        // Best Practices

        "no-alert": 1,        
        // case문에서 let, const는 괄호 사용
        "no-case-declarations": 1,        
        // eval() 보안상 사용 금지
        "no-eval": 1,        
        "indent": [1, "tab"],        
        "quotes": [1, "backtick"],
        "semi": [1, "never"],                

        // ECMAScript 6
        "arrow-body-style": 1,
        "arrow-parens": [1, `as-needed`],
        "arrow-spacing": 1,
        "no-useless-computed-key": 1,
        "no-useless-rename": 1,
        "no-var": 1,
        "prefer-arrow-callback": 1,
        "prefer-const": 1,
        "prefer-numeric-literals": 1,
        "prefer-rest-params": 1,
        "prefer-spread": 1,
        "prefer-template": 1
    },
    // allow global variables
    "globals": {
        "chrome": true,		
		"i18next": true,
    },
    "plugins": ['import'],
}
