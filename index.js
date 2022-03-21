$(function () {
    // alert("jQuery event: button at work history section. Which can add a new project in the portfolio.");
    $("#add-project").click(() => {

        let from = $("#project-from").val();
        let to = $("#project-to").val();
        let institution = $("#project-institution").val();
        let description = $("#project-description").val();


        $("#work-list").append(`
            <li>
                        <div class="date">${from} - ${to}</div>
                        <div class="info">
                            <p class="semi-bold">${institution}</p>
                            <p>${description}</p>
                        </div>
                    </li>
        `);
        $("#addprojectModal").modal("hide");
    });
});