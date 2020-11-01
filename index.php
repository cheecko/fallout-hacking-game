<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" media="screen" href="quasar-color-palette.css" />
    <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

</head>
<body>
    <div class="container my-5">
        <h1>Fallout</h1>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="difficulty-choice btn bg-green-13" value="4">Very Easy</button>
            <button type="button" class="difficulty-choice btn bg-teal-13" value="6">Easy</button>
            <button type="button" class="difficulty-choice btn bg-yellow-13" value="8">Medium</button>
            <button type="button" class="difficulty-choice btn bg-orange-13" value="11">Hard</button>
            <button type="button" class="difficulty-choice btn bg-red-9 text-white" value="15">Very Hard</button>
        </div>
        <div class="my-3">
            <h4>Guess (<span id="guess-remain">4</span> left)? <span id="choosed-answer"></span></h4>
            <h4><span id="status-answer"></span></h4>
        </div>
        <div id="text-choice" class="my-3">
        </div>
    </div>
    <script src="index.js"></script>
</body>
</html>