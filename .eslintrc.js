module.exports = {
  root: true,
  extends: '@react-native',
  env: {
    node: true, // Node.js 환경을 지정하여 CommonJS 형식을 올바르게 인식
  },
  rules: {
    // 특정 제안을 비활성화
    'import/no-commonjs': 'off', // CommonJS 사용 제안 비활성화
  },
};
