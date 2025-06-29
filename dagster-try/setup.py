from setuptools import find_packages, setup

setup(
    name="dagster_try",
    packages=find_packages(exclude=["dagster_try_tests"]),
    install_requires=[
        "dagster",
        "dagster-cloud"
    ],
    extras_require={"dev": ["dagster-webserver", "pytest"]},
)
