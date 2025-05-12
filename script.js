// بيانات وهمية للاختبار
let identities = [];

function showPage(page) {
  const content = document.getElementById('content');
  if (page === 'home') {
    content.innerHTML = `<h2>مرحباً بكم في سيرفر FalcoN LiFe</h2>`;
  } else if (page === 'submit') {
    content.innerHTML = `
      <div class="warning">عزيزي العضو، املأ جميع البيانات!</div>
      <form onsubmit="submitID(event)">
        <input type="text" placeholder="الاسم" required>
        <input type="number" placeholder="العمر" required>
        <input type="date" placeholder="تاريخ الميلاد" required>
        <button type="submit">إرسال</button>
      </form>
    `;
  }
}

function submitID(e) {
  e.preventDefault();
  alert("تم تقديم الهوية بنجاح! سيتم مراجعتها من المسؤول.");
}
