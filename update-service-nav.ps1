# PowerShell script to update service navigation in all service pages

$serviceFiles = @(
    "apace-planning.html",
    "color-consultation.html", 
    "furniture-selection.html",
    "lighting-design.html",
    "material-finish.html",
    "project-management.html",
    "styling-decor.html"
)

foreach ($file in $serviceFiles) {
    $filePath = "services/$file"
    if (Test-Path $filePath) {
        Write-Host "Updating $file..."
        
        # Get the base name without extension for active class
        $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file)
        
        # Define the new navigation menu based on the file
        $newNav = @"
                                        <li class="menu-item-has-children">
                                            <a class="active" href="#">Service</a>
                                            <ul class="sub-menu">
                                                <li><a href="../service.html">All Services</a></li>
                                                <li><a href="3d-mood.html">3D Mood Boards</a></li>
                                                <li><a href="apace-planning.html">Space Planning</a></li>
                                                <li><a href="color-consultation.html">Color Consultation</a></li>
                                                <li><a href="furniture-selection.html">Furniture Selection</a></li>
                                                <li><a href="lighting-design.html">Lighting Design</a></li>
                                                <li><a href="material-finish.html">Material & Finish</a></li>
                                                <li><a href="project-management.html">Project Management</a></li>
                                                <li><a href="styling-decor.html">Styling & Decor</a></li>
                                                <li><a href="../pricing.html">Pricing</a></li>
                                            </ul>
                                        </li>
"@

        # Set the active class for the current page
        $newNav = $newNav -replace "href=`"$file`"", "class=`"active`" href=`"$file`""
        
        # Read the file content
        $content = Get-Content $filePath -Raw
        
        # Replace the service navigation section
        $pattern = '(?s)(<li class="menu-item-has-children">\s*<a[^>]*href="#">Service</a>\s*<ul class="sub-menu">.*?</ul>\s*</li>)'
        $content = $content -replace $pattern, $newNav
        
        # Write back to file
        Set-Content $filePath $content -NoNewline
        
        Write-Host "Updated $file successfully."
    }
}

Write-Host "All service navigation menus updated!"
