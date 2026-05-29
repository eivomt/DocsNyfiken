import numpy as np
import matplotlib.pyplot as plt
from scipy.special import j0, y0, hankel1

# Domain
x = np.linspace(0.01, 30, 2000)  # avoid x=0 for Y0

# J0(x) - Bessel function of the first kind, order 0
plt.figure(figsize=(12, 4))
plt.plot(x, j0(x), linewidth=4)
plt.xticks([])
plt.yticks([])
plt.axis('off')
plt.savefig("./firstKindBessel.png", dpi=300)
plt.close()

# Y0(x) - Bessel function of the second kind, order 0
plt.figure(figsize=(12, 4))
plt.plot(x, y0(x), linewidth=4)
plt.xticks([])
plt.yticks([])
plt.axis('off')
plt.savefig("./secondKindBessel.png", dpi=300)
plt.close()


h = hankel1(0, x)  # H_0^(1)(x)

plt.figure(figsize=(12,4))
plt.plot(x, h.real, linewidth=4, label=r"$\Re(H_0^{(1)}(x))$")
plt.plot(x, h.imag, linewidth=4, label=r"$\Im(H_0^{(1)}(x))$")

plt.xticks([])
plt.yticks([])
plt.axis('off')
plt.savefig("./firstKindHankel.png", dpi=300)
plt.close()