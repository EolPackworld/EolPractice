<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $conn = mysqli_connect("localhost", "root", "", "login_process");

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    if (isset($_POST['submit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
    
        $sql = "INSERT INTO user_login (user_name, pass_word) VALUES ('$username', '$password')";
    
        if (mysqli_query($conn, $sql)) {
            header('Location: dashboard.html');
            exit();
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }
    
    mysqli_close($conn);
} else {
    echo "Invalid REQUEST";
}
?>
