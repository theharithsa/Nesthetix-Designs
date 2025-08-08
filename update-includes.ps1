# PowerShell script to update all HTML files to use the unified header/footer system

$mainFiles = @("about.html", "contact.html", "project.html", "project-single.html", "pricing.html", "404.html")
$serviceFiles = Get-ChildItem -Path "services/*.html" -Name

Write-Host "Updating main files..."
foreach ($file in $mainFiles) {
    if (Test-Path $file) {
        Write-Host "Processing $file..."
        
        $content = Get-Content $file -Raw -Encoding UTF8
        
        # Replace header section
        $headerPattern = '(?s)<!-- Start header -->.*?<!-- end of header -->'
        $headerReplacement = '<!-- Header will be loaded here -->
        <div id="header-placeholder"></div>'
        
        $content = $content -replace $headerPattern, $headerReplacement
        
        # Replace footer section  
        $footerPattern = '(?s)<!-- start of wpo-site-footer-section -->.*?<!-- end of wpo-site-footer-section -->'
        $footerReplacement = '<!-- Footer will be loaded here -->
        <div id="footer-placeholder"></div>'
        
        $content = $content -replace $footerPattern, $footerReplacement
        
        # Add include system script before closing body tag
        $scriptPattern = '</body>'
        $scriptReplacement = '    <!-- Include system for header and footer -->
    <script src="includes/include-system.js"></script>
</body>'
        
        $content = $content -replace $scriptPattern, $scriptReplacement
        
        # Write back to file
        Set-Content -Path $file -Value $content -Encoding UTF8 -NoNewline
        Write-Host "Updated $file successfully."
    }
}

Write-Host "`nUpdating service files..."
foreach ($file in $serviceFiles) {
    $filePath = "services/$file"
    Write-Host "Processing $filePath..."
    
    $content = Get-Content $filePath -Raw -Encoding UTF8
    
    # Replace header section
    $headerPattern = '(?s)<!-- Start header -->.*?<!-- end of header -->'
    $headerReplacement = '<!-- Header will be loaded here -->
        <div id="header-placeholder"></div>'
    
    $content = $content -replace $headerPattern, $headerReplacement
    
    # Replace footer section
    $footerPattern = '(?s)<!-- start of wpo-site-footer-section -->.*?<!-- end of wpo-site-footer-section -->'
    $footerReplacement = '<!-- Footer will be loaded here -->
        <div id="footer-placeholder"></div>'
    
    $content = $content -replace $footerPattern, $footerReplacement
    
    # Add include system script with correct path for subfolder
    $scriptPattern = '</body>'
    $scriptReplacement = '    <!-- Include system for header and footer -->
    <script src="../includes/include-system.js"></script>
</body>'
    
    $content = $content -replace $scriptPattern, $scriptReplacement
    
    # Write back to file
    Set-Content -Path $filePath -Value $content -Encoding UTF8 -NoNewline
    Write-Host "Updated $filePath successfully."
}

Write-Host "`nAll files updated with unified header/footer system!"
Write-Host "The include system will:"
Write-Host "- Load header.html and footer.html from includes/ folder"
Write-Host "- Automatically set correct paths based on page location"
Write-Host "- Set active navigation states"
Write-Host "- Maintain consistent navigation across all pages"
