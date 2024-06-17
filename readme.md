# Chinook with Ontimize Angular front-end
This is a proof of concept - a local MySQL Chinook database is used to store a yaml file and custom endpoints can read and write the yaml.  The model was created using ApiLogicServer (app-create and app-build) feature to generate the complete application from the yaml file. This editor is designed to help developers edit the templates and labels used in the Ontimize application.

## Ontimize Seed
The Ontimize application is loaded in ui/app directory. The react-admin is in the ui/admin directory.

## Run the demo

## 1.1 Establish Your Python Environment 
*  __1.1 Establish your Python Environment__ 
    * Docker or VSCode - [nothing to do](#docker-or-vscode---nothing-to-do)
    * Otherwise, [Establish Your Python Environment](#establish-your-python-environment---other-environments) to activate these runtime systems

### Install ApiLogicServer:

```bash title="Install API Logic Server in a Virtual Environment"
python3 -m venv venv                        # may require python3 -m venv venv
venv\Scripts\activate                       # mac/linux: source venv/bin/activate
pip install ApiLogicServer
```

```bash title="Install the Ontimize Yaml project and (install and launch VSCode)"
git clone https://github.com/tylerm007/chinook_with_ontimize.git
cd /chinook_with_ontimize
code .
```

```bash title="start ApiLogicServer"
-- press F5 to start ApiLogicServer or python3 api_logic_server_run.py
-- in a terminal window or 
-- use run menu to Install Ontimize and Launch Ontimize
# cd chinook_with_ontimize/ui/app
npm install
npm start
```
### in a browser - run the react-admin app
```
http://localhost:5656 (user: admin password: p)
```

### Start and run the Ontimize application
```

http://localhost:4299 (user: admin password: p)
```


&nbsp;

# Using this readme

This readme contains the following sections:


| Section                  | Info                               |
|:-------------------------|:-----------------------------------|
| [1. Setup and Run](#1-setup-and-run) | Information about API Logic Server, and setting up your venv     |
| [2. Key Customization Files](#2-key-customization-files) | Quick idea of the key files you'll alter        |
| [3. Procedures](#3-procedures) | Key Procedures        |
| [4. Deployment](#4-deployment) | Deploy early previews to the cloud - enable team collaboration     |
| [5. Project Requirements](#5-project-requirements)     | Options for capturing requirements |
| [6. Project Information](#6-project-information)                | Creation dates, versions          |
| [Appendix - Key Technologies](#appendix-key-technologies)    | Doc links of key libraries         |

&nbsp;

# 1. Setup and Run

To run your project, the system requires various runtime systems for data access, api, and logic.  These are included with API Logic Server ([architecture doc here](https://apilogicserver.github.io/Docs/Architecture-What-Is/)).  

So, to run your project:

*  __1.1 Establish your Python Environment__ 
    * Docker or VSCode - [nothing to do](#docker-or-vscode---nothing-to-do)
    * Otherwise, [Establish Your Python Environment](#establish-your-python-environment---other-environments) to activate these runtime systems
* __[1.2 Run](#12-run)__

&nbsp;

## 1.1 Establish Your Python Environment - Other Environments

Your `requirements.txt` has already been created, so...

```bash title="Install API Logic Server in a Virtual Environment"
python -m venv venv                        # may require python3 -m venv venv
venv\Scripts\activate                      # mac/linux: source venv/bin/activate
python -m pip install -r requirements.txt  # accept "new Virtual environment"
```

Notes:

* See also the `venv_setup` directory in this API Logic Project.

* If using SqlServer, install `pyodbc`.  Not required for docker-based projects.  For local installs, see the [Quick Start](https://apilogicserver.github.io/Docs/Install-pyodbc/).

&nbsp;

#### Docker or VSCode - nothing to do

Nothing to do here:

* **VSCode:** projects automatically use installed API Logic Server `venv`, so this step is ***not required*** until you want to create a local `venv` for additional packages.

* **Docker:** Your runtime systems are part of Dev Container, which you probably activated when you [opened the project](https://apilogicserver.github.io/Docs/IDE-Execute/).  

    * If you did not accept the "Open in Container" option when you started VSCode, use __View > Command Palette > Remote-Containers: Reopen in Container__.

&nbsp;

&nbsp;

## 1.2 Run

The `ApiLogicServer create` command creates Run Configurations for PyCharm and VSCode:

* For PyCharm, press Ctl-D
* For VSCode, &nbsp;press F5:

![Start Project](https://github.com/ApiLogicServer/Docs/blob/main/docs/images/tutorial/2-apilogicproject-nutshell.png?raw=true)

As shown above:

1. Use the pre-supplied Run Configurations; use either...
    * `ApiLogicServer` to run [with security](https://apilogicserver.github.io/Docs/Security-Swagger/)
    * `ApiLogicServer - No Security` (simplifies use of Swagger)
2. Click the url in the console to start the Admin App
    * Use it to explore your **data** (shown below)
    * And your **API** (via Swagger)

![Admin App](https://github.com/ApiLogicServer/Docs/blob/main/docs/images/ui-admin/run-admin-app.png?raw=true)


&nbsp;

# 2. Key Customization Files

Your project is ready to run, but it's likely you'll want to customize it - declare logic, new endpoints, etc.

>> Tip: in particular, use the sample app to explore the value of ___declarative logic and security.___  Unique to API Logic Server, this is critical to unlocking the full value of API Logic Server.

The ___Key Customization Files___ listed in the table below are created as stubs, intended for you to add customizations that extend the created API, Logic and Web App.

* Since they are separate files, the project can be
[rebuilt](https://apilogicserver.github.io/Docs/Project-Rebuild/) (e.g., synchronized with a revised schema), preserving your customizations.

To explore customization, see the `nw` sample for examples of typical customizations.  You can open it in GitHub (use Shift + "." to view in project mode) - [click here](https://github.com/ApiLogicServer/demo), or create it locally (`ApiLogicServer create` - accept defaults).

To make customizations easy to explore, **search for:**
* `#als` will reveal key customization examples
* `Your Code Goes Here` to find key files to customize, summarized below:

| Directory | Usage                         | Key Customization File             | Typical Customization                                                                 |
|:-------------- |:------------------------------|:-----------------------------------|:--------------------------------------------------------------------------------------|
| ```api``` | **JSON:API**<br>*Ready to Run*                    | ```api/customize_api.py```         | Add new end points / services                                                         |
| ```ui``` | **Multi-Page Admin App**<br>*Ready to Run*  | ```ui/admin/admin.yaml```          | Control field display - order, captions etc.                                          |
| ```database``` | SQLAlchemy Data Model Classes | ```database/customize_models.py``` | Add derived attributes, and relationships missing in the schema                       |
| ```logic``` | **Transactional Logic**<br>spreadsheet-like rules   | ```logic/declare_logic.py```       | Declare multi-table derivations, constraints, and Python events such as send mail / messages |
| ```security``` | Authentication, Authorization   | ```security/declare_security.py```          | Control login, role-based row access         |
| ```integration``` | Consume Kafka Messages             | ```integration/kafka/kafka_consumer.py```          |  [Application Integration](https://apilogicserver.github.io/Docs/Sample-Integration/)                                          |
| ```tests``` | Behave Test Suite              | ```tests/api_logic_server_behave/features```          | Declare and implement [Behave Tests](https://apilogicserver.github.io/Docs/Behave/)                                          |

> Note: API Logic Server CLI provides commands you can use to ugrade your project, e.g., to add security.  Discover the CLI commands with `ApiLogicServer`.

&nbsp;

# 3. Procedures

See [alembic](database/alembic/readme.md) for database migration procedures.

| Procedures               | Notes                              |
|:-------------------------|:-----------------------------------|
| 1. **Database Migration** | See [alembic](database/alembic/readme.md) for database migration procedures.     |

&nbsp;

# 4. Deployment

The `devops` directory contains several scripts for creating container images, testing them, and deploying them.

Since API Logic Server creates working software (UI, API), you can do this after creating your project, to [collaborate with your team](https://apilogicserver.github.io/Docs/DevOps-Containers-Preview/).
&nbsp;

# 5. Project Requirements

Optionally, you can **document requirements** as part of an **executable test plan**.  Test plan execution creates documentation (in markdown), including **requirements traceability** into implementation.  [See example here](test/api_logic_server_behave/reports/Behave%20Logic%20Report%20Sample.md).

&nbsp;

# 6. Project Information

This API Logic Project was created with the `ApiLogicServer create` command.
For information on Managing API Logic Projects, [click here](https://apilogicserver.github.io/Docs/Project-Structure).

| About                    | Info                               |
|:-------------------------|:-----------------------------------|
| Created                  | June 17, 2024 08:44:15                      |
| API Logic Server Version | 10.04.60           |
| Created in directory     | chinook |
| API Name                 | api          |
| Execution begins with    | `api_logic_server_run.py`          |


&nbsp;

# Appendix: Key Technologies

API Logic Server is based on the projects shown below.
Consult their documentation for important information.

&nbsp;

### SARFS JSON:API Server

[SAFRS: Python OpenAPI & JSON:API Framework](https://github.com/thomaxxl/safrs)

SAFRS is an acronym for SqlAlchemy Flask-Restful Swagger.
The purpose of this framework is to help python developers create
a self-documenting JSON API for sqlalchemy database objects and relationships.

These objects are serialized to JSON and 
created, retrieved, updated and deleted through the JSON API.
Optionally, custom resource object methods can be exposed and invoked using JSON.

Class and method descriptions and examples can be provided
in yaml syntax in the code comments.

The description is parsed and shown in the swagger web interface.
The result is an easy-to-use
swagger/OpenAPI and JSON:API compliant API implementation.

&nbsp;

### LogicBank
[Transaction Logic for SQLAlchemy Object Models](https://apilogicserver.github.io/Docs/Logic-Why/)

Use Logic Bank to govern SQLAlchemy update transaction logic - 
multi-table derivations, constraints, and actions such as sending mail or messages. Logic consists of _both:_

*   **Rules - 40X** more concise using a spreadsheet-like paradigm, and

*   **Python - control and extensibility,** using standard tools and techniques

Logic Bank is based on SQLAlchemy - it handles `before_flush` events to enforce your logic.
Your logic therefore applies to any SQLAlchemy-based access - JSON:Api, Admin App, etc.

&nbsp;

### SQLAlchemy

[Object Relational Mapping for Python](https://docs.sqlalchemy.org/en/13/).

SQLAlchemy provides Python-friendly database access for Python.

It is used by JSON:Api, Logic Bank, and the Admin App.

SQLAlchemy processing is based on Python `model` classes,
created automatically by API Logic Server from your database,
and saved in the `database` directory.

&nbsp;

### Admin App

This generated project also contains a React Admin app:
* Multi-page - including page transitions to "drill down"
* Multi-table - master / details (with tab sheets)
* Intelligent layout - favorite fields first, predictive joins, etc
* Logic Aware - updates are monitored by business logic

&nbsp;

### Python Tips

If you are new to Python, check out [these tips](https://apilogicserver.github.io/Docs/Tech-Python/).