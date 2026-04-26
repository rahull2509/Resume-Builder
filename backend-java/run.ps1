$ErrorActionPreference = "Stop"

$toolsDir = "$PSScriptRoot\.tools"

# Find extracted JDK directory
$jdkDir = Get-ChildItem -Path $toolsDir -Directory | Where-Object { $_.Name -like "jdk-17*" } | Select-Object -First 1
if (!$jdkDir) {
    Write-Host "Failed to find extracted JDK folder."
    exit 1
}

$mavenDir = Get-ChildItem -Path $toolsDir -Directory | Where-Object { $_.Name -like "apache-maven*" } | Select-Object -First 1

$env:JAVA_HOME = $jdkDir.FullName
$env:Path = "$($jdkDir.FullName)\bin;$($mavenDir.FullName)\bin;" + [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

Write-Host "Java Version:"
java -version

Write-Host "Starting Spring Boot backend..."
cd $PSScriptRoot
mvn spring-boot:run
