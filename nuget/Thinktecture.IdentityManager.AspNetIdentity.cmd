mkdir Thinktecture.IdentityManager.AspNetIdentity\lib\net45
xcopy ..\build\Thinktecture.IdentityManager.AspNetIdentity.dll Thinktecture.IdentityManager.AspNetIdentity\lib\net45 /y
xcopy ..\build\Thinktecture.IdentityManager.AspNetIdentity.pdb Thinktecture.IdentityManager.AspNetIdentity\lib\net45 /y
NuGet.exe pack Thinktecture.IdentityManager.AspNetIdentity\Thinktecture.IdentityManager.AspNetIdentity.nuspec -OutputDirectory .
