function checkName(event) {
    event.preventDefault();

    var name = document.getElementById("nameInput").value.toLowerCase();

    if (name === "الياس") {
        window.location.href = "Killer-reveal.html";
    } else if (name === "محمد") {
        Swal.fire({
            icon: 'error',
            title: 'خطأ...',
            text: 'لا لا، هذا ليس صحيحاً.',
            confirmButtonColor:"#d33",
            confirmButtonText: "حسنا"
        });
    } else {
        Swal.fire({
            icon: 'warning',
            title: name +' من هو ' + name + '؟؟!!',
            text:'ارجع إلى الصفحة وحاول كتابة الاسم الأول الحقيقي للمشتبه به - بدون ألقاب، فقط اسمه الأول، من فضلك',
            confirmButtonColor:"#d33",
            confirmButtonText: "حسنا"
        });
    }
}