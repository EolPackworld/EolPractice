<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
    <title>EDL Packworld</title>
</head>
<body>
    <div class="container-fluid d-flex justify-content-center align-items-center" style="width: 100%; height: 100vh; background: #eee">
        <div class="container d-flex justify-content-center align-items-center flex-column" style="background: #fff; padding: 20px;">
            <div class="d-flex justify-content-end align-items-end w-100">
                <h3>EOL Packworld</h3>
            </div>
            <div class="d-flex justify-content-center align-items-center flex-column" style="background-color: #eee;">
                <div class="d-flex justify-content-end align-items-center flex-column" style="width: 100%; margin-top: 20px;">
                    <img src="logo1.jpg" style="width: 100px; height: 100px; border-radius: 50%">
                    <h4>User Login</h4>
                </div>
                <div class="d-flex justify-content-center align-items-center w-100" style="padding: 10px;">
                    <form action="process_form.php" method="POST" class="d-flex justify-content-center align-items-center flex-column" style="padding: 10px; border: 1px solid #fff;">
                        <input type="text" name="username" placeholder="User Name" required style="padding: 10px; border: none; outline: none; width: 350px;">
                        <input type="password" name="password" placeholder="Password" required style="padding: 10px; border: none; outline: none; margin-top: 10px; width: 350px;">
                        <input type="submit" name="submit" value="submit" style="padding: 8px 20px 8px 20px; border: none; outline: none; margin-top: 10px; border-radius: 10px; background: #558eeb; color: #fff;">
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>