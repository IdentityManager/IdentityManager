mkdir Thinktecture.IdentityManager.MembershipReboot\lib\net45
xcopy ..\build\Thinktecture.IdentityManager.MembershipReboot.dll Thinktecture.IdentityManager.MembershipReboot\lib\net45 /y
xcopy ..\build\Thinktecture.IdentityManager.MembershipReboot.pdb Thinktecture.IdentityManager.MembershipReboot\lib\net45 /y
NuGet.exe pack Thinktecture.IdentityManager.MembershipReboot\Thinktecture.IdentityManager.MembershipReboot.nuspec -OutputDirectory .
