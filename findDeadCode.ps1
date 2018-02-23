# this function recursively searches a target directory for a query string
# and writes any strings that are not found
# or that are only referenced by files whose names contain the query string 
# to a target location
function queryBaseline($Query) {
	$Result =  Get-ChildItem -Recurse | Select-String -Pattern $Query -SimpleMatch | group path
	
	If (-not($Result -eq $null))
	{
		If($Result.count -gt 0)
		{
			$externalRef = 0
			$Display
			
			$Result | ForEach {
				$Display = $_.Values[0]
				
				If(isExternalRef($Display) -eq 1){
					$externalRef = $externalRef + 1
				}
			}

			Write-Host "$externalRef external references to $Query found"
			If($externalRef -eq 0){
				Add-Content $Location "$Display"
			}
		}
		else
		{
			Write-Host "no references to $Query found"
			Add-Content $Location "$Display"
		}
	}
	ElseIf ($Result -eq $null)
	{
		Write-Host "$Query not found"
		Add-Content $Location "$Query"
	}
}

function isExternalRef($Display){
	$Return = 1

	If($Display -Match $Query)
	{
		$Return = 0
	}
	
	return $Return
}

# this should point to the directory that you want to search
$Target = "c:\target\"
# this should point to where you want the output to go
$Location = "C:\output.txt"
Set-location $Target

queryBaseline "target.jsp"

Read-Host -Prompt 'Press any key'
