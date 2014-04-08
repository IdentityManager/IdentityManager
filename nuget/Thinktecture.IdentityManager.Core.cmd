mkdir Thinktecture.IdentityManager.Core\lib\net45
xcopy ..\build\Thinktecture.IdentityManager.Core.dll Thinktecture.IdentityManager.Core\lib\net45 /y
xcopy ..\build\Thinktecture.IdentityManager.Core.pdb Thinktecture.IdentityManager.Core\lib\net45 /y
NuGet.exe pack Thinktecture.IdentityManager.Core\Thinktecture.IdentityManager.Core.nuspec -OutputDirectory .
