import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  //dist폴더는 eslint 검사 제외
  { ignores: ["dist"] },
  {
    //eslint 검사대상 파일명의 확장자(**/*:모든 폴더의 모든 파일)
    files: ["**/*.{js,jsx}"],
    //js 및 jsx 프로그래밍 옵션
    languageOptions: {
      //js검사 기준버전
      ecmaVersion: 2020,
      //globals는 웹브라우저:window, node.js:local
      //웹브라우저를 사용할건데 window, document ...
      globals: globals.browser,
      //parser : 해석, 풀이, 풀어놓는다.
      parserOptions: {
        //latest : ECMA 최신버전을 활용하겠다!
        ecmaVersion: "latest",
        //jsx를 사용(true)하겠다!
        ecmaFeatures: { jsx: true },
        //모듈 방식중에 ESModule을 사용하겠다!
        //import와 export를 사용하겠다!
        sourceType: "module",
      },
    },
    //React버전
    settings: { react: { version: "18.3" } },
    //ESLint 플러그인
    plugins: {
      //react 문법규칙이 맞는지 검사용도 도구
      react,
      //react hooks의 규칙이 맞는지 검사용도 도구
      "react-hooks": reactHooks,
      //react 새로고침
      "react-refresh": reactRefresh,
    },
    //검사규칙
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
