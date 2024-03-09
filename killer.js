function checkName(event) {
    event.preventDefault();

    var name = document.getElementById("nameInput").value.toLowerCase();
    const killers = ["هيا", "صفوان","شيماء","جاد","مراد"];

    function isNotInKillers(input) {
        return !killers.includes(input);
    }
    if (name === "الياس" || name === "إلياس") {
        window.location.href = "Killer-reveal.html";
    } else if (!isNotInKillers(name)) {
        Swal.fire({
            icon: 'error',
            title: 'خطأ...',
            color : '#000',
            // iconColor: '#000',
            text: 'لا لا، هذا ليس صحيحاً.',
            confirmButtonColor:"#000",
            confirmButtonText: "حسنا"
        });
    } else {
        Swal.fire({
            icon: 'warning',
            title: name +' من هو ' + name + '؟؟!!',
            text:'ارجع إلى الصفحة وحاول كتابة الاسم الأول الحقيقي للمشتبه به - بدون ألقاب، فقط اسمه الأول، من فضلك',
            // background: '#000',
             color : '#000',
            iconColor: '#000',
            confirmButtonColor:"#000",
            confirmButtonText: "حسنا"
        });
    }
}