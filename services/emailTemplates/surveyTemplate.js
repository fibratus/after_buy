const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>손님의 의견을 듣고 싶습니다.</h3>
          <p>설문에 응답해주세요.</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">예</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">아니요</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
